/**
 * Salamander Exchange Data Layer
 * 
 * Aggregates data from multiple sources:
 * - Kraken (primary — hackathon sponsor): prices, OHLC, order book, trades
 * - CoinGecko: aggregated market data, sparklines, market caps
 * - Binance: secondary prices, 24h volume
 * - DeFi Llama: yield farming data, TVL, protocol stats
 * 
 * All endpoints are free/public — no API keys required.
 */

// ============================================================
// Types
// ============================================================

export interface TokenPrice {
  symbol: string
  name: string
  price: number
  change24h: number
  high24h: number
  low24h: number
  volume24h: number
  volumeUsd24h: number
  marketCap: number
  sparkline7d: number[]
  source: 'kraken' | 'binance' | 'coingecko'
  updatedAt: number
}

export interface OHLCCandle {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface OrderBookEntry {
  price: number
  amount: number
  total: number
}

export interface OrderBook {
  pair: string
  bids: OrderBookEntry[]
  asks: OrderBookEntry[]
  spread: number
  source: string
  updatedAt: number
}

export interface RecentTrade {
  id: string
  pair: string
  price: number
  amount: number
  side: 'buy' | 'sell'
  time: number
  source: string
}

export interface DefiPool {
  pool: string
  project: string
  chain: string
  tvlUsd: number
  apy: number
  apyBase: number
  apyReward: number
  symbol: string
  rewardTokens: string[]
  updatedAt: number
}

export interface ProtocolTVL {
  name: string
  chain: string
  tvl: number
  change1d: number
  change7d: number
  category: string
}

// ============================================================
// Cache
// ============================================================

const cache = new Map<string, { data: any; expiry: number }>()

function cached<T>(key: string, ttlMs: number, fetcher: () => Promise<T>): Promise<T> {
  const entry = cache.get(key)
  if (entry && Date.now() < entry.expiry) {
    return Promise.resolve(entry.data as T)
  }
  return fetcher().then(data => {
    cache.set(key, { data, expiry: Date.now() + ttlMs })
    return data
  })
}

// ============================================================
// KRAKEN — Primary Exchange (Sponsor)
// Docs: https://docs.kraken.com/rest/
// ============================================================

const KRAKEN_BASE = 'https://api.kraken.com/0/public'

// Map of our symbols to Kraken pair codes
const KRAKEN_PAIRS: Record<string, { pair: string; wsName: string }> = {
  BTC:  { pair: 'XBTUSD',   wsName: 'XBT/USD' },
  ETH:  { pair: 'ETHUSD',   wsName: 'ETH/USD' },
  SOL:  { pair: 'SOLUSD',   wsName: 'SOL/USD' },
  AVAX: { pair: 'AVAXUSD',  wsName: 'AVAX/USD' },
  MATIC:{ pair: 'MATICUSD', wsName: 'MATIC/USD' },
  DOT:  { pair: 'DOTUSD',   wsName: 'DOT/USD' },
  LINK: { pair: 'LINKUSD',  wsName: 'LINK/USD' },
  UNI:  { pair: 'UNIUSD',   wsName: 'UNI/USD' },
  AAVE: { pair: 'AAVEUSD',  wsName: 'AAVE/USD' },
  ARB:  { pair: 'ARBUSD',   wsName: 'ARB/USD' },
  OP:   { pair: 'OPUSD',    wsName: 'OP/USD' },
}

export async function krakenTicker(symbols: string[]): Promise<TokenPrice[]> {
  const pairs = symbols
    .map(s => KRAKEN_PAIRS[s])
    .filter(Boolean)
    .map(p => p.pair)

  if (pairs.length === 0) return []

  return cached(`kraken:ticker:${pairs.join(',')}`, 8_000, async () => {
    const res = await fetch(`${KRAKEN_BASE}/Ticker?pair=${pairs.join(',')}`)
    const json = await res.json()
    if (json.error?.length) throw new Error(json.error[0])

    const results: TokenPrice[] = []
    for (const symbol of symbols) {
      const kp = KRAKEN_PAIRS[symbol]
      if (!kp) continue

      // Kraken returns keys with different formats, find the right one
      const data = Object.entries(json.result).find(([key]) =>
        key.includes(kp.pair) || key.includes(symbol)
      )?.[1] as any

      if (!data) continue

      const last = parseFloat(data.c[0])
      const open = parseFloat(data.o)
      const high = parseFloat(data.h[1])
      const low = parseFloat(data.l[1])
      const vol = parseFloat(data.v[1])

      results.push({
        symbol,
        name: symbol,
        price: last,
        change24h: ((last - open) / open) * 100,
        high24h: high,
        low24h: low,
        volume24h: vol,
        volumeUsd24h: vol * last,
        marketCap: 0, // Kraken doesn't provide this
        sparkline7d: [],
        source: 'kraken',
        updatedAt: Date.now(),
      })
    }
    return results
  })
}

export async function krakenOHLC(symbol: string, interval: number = 60): Promise<OHLCCandle[]> {
  const kp = KRAKEN_PAIRS[symbol]
  if (!kp) return []

  return cached(`kraken:ohlc:${symbol}:${interval}`, 30_000, async () => {
    const res = await fetch(`${KRAKEN_BASE}/OHLC?pair=${kp.pair}&interval=${interval}`)
    const json = await res.json()
    if (json.error?.length) throw new Error(json.error[0])

    const data = Object.values(json.result).find(Array.isArray) as any[]
    if (!data) return []

    return data.map((c: any) => ({
      time: c[0] * 1000,
      open: parseFloat(c[1]),
      high: parseFloat(c[2]),
      low: parseFloat(c[3]),
      close: parseFloat(c[4]),
      volume: parseFloat(c[6]),
    }))
  })
}

export async function krakenOrderBook(symbol: string, count: number = 25): Promise<OrderBook | null> {
  const kp = KRAKEN_PAIRS[symbol]
  if (!kp) return null

  return cached(`kraken:book:${symbol}:${count}`, 5_000, async () => {
    const res = await fetch(`${KRAKEN_BASE}/Depth?pair=${kp.pair}&count=${count}`)
    const json = await res.json()
    if (json.error?.length) throw new Error(json.error[0])

    const data = Object.values(json.result)[0] as any
    if (!data) return null

    const parseSide = (entries: any[]): OrderBookEntry[] => {
      let running = 0
      return entries.map(e => {
        const price = parseFloat(e[0])
        const amount = parseFloat(e[1])
        running += amount
        return { price, amount, total: running }
      })
    }

    const bids = parseSide(data.bids)
    const asks = parseSide(data.asks)
    const spread = asks[0] && bids[0] ? asks[0].price - bids[0].price : 0

    return {
      pair: `${symbol}/USD`,
      bids,
      asks,
      spread,
      source: 'kraken',
      updatedAt: Date.now(),
    }
  })
}

export async function krakenRecentTrades(symbol: string): Promise<RecentTrade[]> {
  const kp = KRAKEN_PAIRS[symbol]
  if (!kp) return []

  return cached(`kraken:trades:${symbol}`, 10_000, async () => {
    const res = await fetch(`${KRAKEN_BASE}/Trades?pair=${kp.pair}&count=50`)
    const json = await res.json()
    if (json.error?.length) throw new Error(json.error[0])

    const data = Object.values(json.result).find(Array.isArray) as any[]
    if (!data) return []

    return data.slice(-50).map((t: any, i: number) => ({
      id: `kraken-${symbol}-${t[2]}-${i}`,
      pair: `${symbol}/USD`,
      price: parseFloat(t[0]),
      amount: parseFloat(t[1]),
      side: t[3] === 'b' ? 'buy' as const : 'sell' as const,
      time: Math.floor(parseFloat(t[2]) * 1000),
      source: 'kraken',
    }))
  })
}

// ============================================================
// COINGECKO — Aggregated Market Data
// Docs: https://www.coingecko.com/en/api/documentation
// Free tier: 10-30 calls/min (no key)
// ============================================================

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3'

const COINGECKO_IDS: Record<string, string> = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  SOL: 'solana',
  AVAX: 'avalanche-2',
  MATIC: 'matic-network',
  DOT: 'polkadot',
  LINK: 'chainlink',
  UNI: 'uniswap',
  AAVE: 'aave',
  ARB: 'arbitrum',
  OP: 'optimism',
  BASE: 'base-protocol',
}

export async function coingeckoMarkets(symbols: string[]): Promise<TokenPrice[]> {
  const ids = symbols.map(s => COINGECKO_IDS[s]).filter(Boolean)
  if (ids.length === 0) return []

  return cached(`coingecko:markets:${ids.join(',')}`, 60_000, async () => {
    const res = await fetch(
      `${COINGECKO_BASE}/coins/markets?vs_currency=usd&ids=${ids.join(',')}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`
    )
    if (!res.ok) throw new Error(`CoinGecko ${res.status}`)
    const data = await res.json()

    return data.map((coin: any) => {
      const symbol = Object.entries(COINGECKO_IDS).find(([, id]) => id === coin.id)?.[0] || coin.symbol.toUpperCase()
      return {
        symbol,
        name: coin.name,
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h || 0,
        high24h: coin.high_24h,
        low24h: coin.low_24h,
        volume24h: 0,
        volumeUsd24h: coin.total_volume,
        marketCap: coin.market_cap,
        sparkline7d: coin.sparkline_in_7d?.price || [],
        source: 'coingecko' as const,
        updatedAt: Date.now(),
      }
    })
  })
}

export async function coingeckoPriceSimple(symbols: string[]): Promise<Record<string, number>> {
  const ids = symbols.map(s => COINGECKO_IDS[s]).filter(Boolean)
  if (ids.length === 0) return {}

  return cached(`coingecko:simple:${ids.join(',')}`, 30_000, async () => {
    const res = await fetch(`${COINGECKO_BASE}/simple/price?ids=${ids.join(',')}&vs_currencies=usd`)
    if (!res.ok) throw new Error(`CoinGecko ${res.status}`)
    const data = await res.json()

    const result: Record<string, number> = {}
    for (const symbol of symbols) {
      const id = COINGECKO_IDS[symbol]
      if (id && data[id]) {
        result[symbol] = data[id].usd
      }
    }
    return result
  })
}

// ============================================================
// BINANCE — Secondary Price Source
// Docs: https://binance-docs.github.io/apidocs/spot/en/
// No auth needed for public endpoints
// ============================================================

const BINANCE_BASE = 'https://api.binance.com/api/v3'

const BINANCE_PAIRS: Record<string, string> = {
  BTC: 'BTCUSDT',
  ETH: 'ETHUSDT',
  SOL: 'SOLUSDT',
  AVAX: 'AVAXUSDT',
  MATIC: 'MATICUSDT',
  DOT: 'DOTUSDT',
  LINK: 'LINKUSDT',
  UNI: 'UNIUSDT',
  AAVE: 'AAVEUSDT',
  ARB: 'ARBUSDT',
  OP: 'OPUSDT',
}

export async function binanceTicker(symbols: string[]): Promise<TokenPrice[]> {
  const binanceSymbols = symbols.map(s => BINANCE_PAIRS[s]).filter(Boolean)
  if (binanceSymbols.length === 0) return []

  return cached(`binance:ticker:${binanceSymbols.join(',')}`, 8_000, async () => {
    const params = JSON.stringify(binanceSymbols)
    const res = await fetch(`${BINANCE_BASE}/ticker/24hr?symbols=${encodeURIComponent(params)}`)
    if (!res.ok) throw new Error(`Binance ${res.status}`)
    const data = await res.json()

    return data.map((t: any) => {
      const symbol = Object.entries(BINANCE_PAIRS).find(([, v]) => v === t.symbol)?.[0] || t.symbol
      return {
        symbol,
        name: symbol,
        price: parseFloat(t.lastPrice),
        change24h: parseFloat(t.priceChangePercent),
        high24h: parseFloat(t.highPrice),
        low24h: parseFloat(t.lowPrice),
        volume24h: parseFloat(t.volume),
        volumeUsd24h: parseFloat(t.quoteVolume),
        marketCap: 0,
        sparkline7d: [],
        source: 'binance' as const,
        updatedAt: Date.now(),
      }
    })
  })
}

export async function binanceKlines(symbol: string, interval: string = '1h', limit: number = 100): Promise<OHLCCandle[]> {
  const pair = BINANCE_PAIRS[symbol]
  if (!pair) return []

  return cached(`binance:klines:${symbol}:${interval}:${limit}`, 30_000, async () => {
    const res = await fetch(`${BINANCE_BASE}/klines?symbol=${pair}&interval=${interval}&limit=${limit}`)
    if (!res.ok) throw new Error(`Binance ${res.status}`)
    const data = await res.json()

    return data.map((k: any) => ({
      time: k[0],
      open: parseFloat(k[1]),
      high: parseFloat(k[2]),
      low: parseFloat(k[3]),
      close: parseFloat(k[4]),
      volume: parseFloat(k[5]),
    }))
  })
}

// ============================================================
// DEFI LLAMA — Yield & TVL Data
// Docs: https://defillama.com/docs/api
// Fully free, no auth
// ============================================================

const DEFILLAMA_BASE = 'https://api.llama.fi'
const DEFILLAMA_YIELDS = 'https://yields.llama.fi'

export async function defiLlamaYields(chains?: string[]): Promise<DefiPool[]> {
  return cached(`defillama:yields:${chains?.join(',') || 'all'}`, 120_000, async () => {
    const res = await fetch(`${DEFILLAMA_YIELDS}/pools`)
    if (!res.ok) throw new Error(`DeFi Llama ${res.status}`)
    const json = await res.json()

    let pools = json.data as any[]

    // Filter by chain if specified
    if (chains?.length) {
      const chainSet = new Set(chains.map(c => c.toLowerCase()))
      pools = pools.filter(p => chainSet.has(p.chain?.toLowerCase()))
    }

    // Sort by TVL descending and take top 50
    pools.sort((a: any, b: any) => (b.tvlUsd || 0) - (a.tvlUsd || 0))
    pools = pools.slice(0, 50)

    return pools.map((p: any) => ({
      pool: p.pool,
      project: p.project,
      chain: p.chain,
      tvlUsd: p.tvlUsd || 0,
      apy: p.apy || 0,
      apyBase: p.apyBase || 0,
      apyReward: p.apyReward || 0,
      symbol: p.symbol,
      rewardTokens: p.rewardTokens || [],
      updatedAt: Date.now(),
    }))
  })
}

export async function defiLlamaProtocols(): Promise<ProtocolTVL[]> {
  return cached('defillama:protocols', 300_000, async () => {
    const res = await fetch(`${DEFILLAMA_BASE}/protocols`)
    if (!res.ok) throw new Error(`DeFi Llama ${res.status}`)
    const data = await res.json()

    // Top 30 protocols by TVL
    return data
      .sort((a: any, b: any) => (b.tvl || 0) - (a.tvl || 0))
      .slice(0, 30)
      .map((p: any) => ({
        name: p.name,
        chain: p.chain || p.chains?.[0] || 'Multi',
        tvl: p.tvl || 0,
        change1d: p.change_1d || 0,
        change7d: p.change_7d || 0,
        category: p.category || 'DeFi',
      }))
  })
}

export async function defiLlamaChainTVL(): Promise<Record<string, number>> {
  return cached('defillama:chains', 300_000, async () => {
    const res = await fetch(`${DEFILLAMA_BASE}/v2/chains`)
    if (!res.ok) throw new Error(`DeFi Llama ${res.status}`)
    const data = await res.json()

    const result: Record<string, number> = {}
    for (const chain of data) {
      result[chain.name] = chain.tvl || 0
    }
    return result
  })
}

// ============================================================
// AGGREGATED FETCHERS — Combine multiple sources with fallback
// ============================================================

/**
 * Get comprehensive market data for a list of symbols.
 * Tries Kraken first (sponsor), falls back to Binance, enriches with CoinGecko.
 */
export async function getMarketData(symbols: string[]): Promise<TokenPrice[]> {
  // Fetch from all sources in parallel
  const [krakenData, binanceData, geckoData] = await Promise.allSettled([
    krakenTicker(symbols),
    binanceTicker(symbols),
    coingeckoMarkets(symbols),
  ])

  const kraken = krakenData.status === 'fulfilled' ? krakenData.value : []
  const binance = binanceData.status === 'fulfilled' ? binanceData.value : []
  const gecko = geckoData.status === 'fulfilled' ? geckoData.value : []

  // Merge: Kraken prices are primary, CoinGecko for sparklines + market cap, Binance as fallback
  const merged = new Map<string, TokenPrice>()

  // Start with Kraken (primary)
  for (const p of kraken) merged.set(p.symbol, p)

  // Fill gaps with Binance
  for (const p of binance) {
    if (!merged.has(p.symbol)) {
      merged.set(p.symbol, p)
    } else {
      // Use Binance volume if Kraken volume seems off
      const existing = merged.get(p.symbol)!
      if (existing.volumeUsd24h === 0) {
        existing.volumeUsd24h = p.volumeUsd24h
      }
    }
  }

  // Enrich with CoinGecko (sparklines, market cap, names)
  for (const p of gecko) {
    const existing = merged.get(p.symbol)
    if (existing) {
      existing.sparkline7d = p.sparkline7d
      existing.marketCap = p.marketCap
      existing.name = p.name
    } else {
      merged.set(p.symbol, p)
    }
  }

  return Array.from(merged.values())
}

/**
 * Get OHLC candles — tries Kraken first, falls back to Binance.
 */
export async function getOHLC(symbol: string, interval: string = '1h'): Promise<OHLCCandle[]> {
  // Map interval string to Kraken minutes
  const krakenIntervalMap: Record<string, number> = {
    '1m': 1, '5m': 5, '15m': 15, '30m': 30,
    '1h': 60, '4h': 240, '1d': 1440, '1w': 10080,
  }

  try {
    const krakenInterval = krakenIntervalMap[interval] || 60
    const data = await krakenOHLC(symbol, krakenInterval)
    if (data.length > 0) return data
  } catch (e) { /* fallback */ }

  try {
    return await binanceKlines(symbol, interval)
  } catch (e) { /* both failed */ }

  return []
}

/**
 * Get top yield farming pools for supported chains.
 */
export async function getTopYields(chains?: string[]): Promise<DefiPool[]> {
  const targetChains = chains || ['Ethereum', 'Base', 'Arbitrum', 'Polygon', 'Optimism']
  try {
    const pools = await defiLlamaYields(targetChains)
    // Sort by APY, filter out extreme outliers
    return pools
      .filter(p => p.apy > 0 && p.apy < 1000 && p.tvlUsd > 100_000)
      .sort((a, b) => b.apy - a.apy)
      .slice(0, 20)
  } catch (e) {
    return []
  }
}

// ============================================================
// Kraken WebSocket (real-time)
// Docs: https://docs.kraken.com/websockets/
// ============================================================

export type KrakenWSCallback = (symbol: string, data: {
  price: number
  volume: number
  bid: number
  ask: number
}) => void

export function createKrakenWebSocket(
  symbols: string[],
  onTicker: KrakenWSCallback,
  onTrade?: (trade: RecentTrade) => void
): { close: () => void } {
  const wsNames = symbols
    .map(s => KRAKEN_PAIRS[s]?.wsName)
    .filter(Boolean)

  if (wsNames.length === 0) return { close: () => {} }

  let ws: WebSocket | null = null
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let closed = false

  function connect() {
    if (closed) return
    ws = new WebSocket('wss://ws.kraken.com')

    ws.onopen = () => {
      // Subscribe to ticker
      ws?.send(JSON.stringify({
        event: 'subscribe',
        pair: wsNames,
        subscription: { name: 'ticker' },
      }))

      // Subscribe to trades if callback provided
      if (onTrade) {
        ws?.send(JSON.stringify({
          event: 'subscribe',
          pair: wsNames,
          subscription: { name: 'trade' },
        }))
      }
    }

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data)
        if (!Array.isArray(msg)) return

        const channelName = msg[msg.length - 2]
        const pairName = msg[msg.length - 1]
        const symbol = Object.entries(KRAKEN_PAIRS).find(([, v]) => v.wsName === pairName)?.[0]
        if (!symbol) return

        if (channelName === 'ticker') {
          const data = msg[1]
          onTicker(symbol, {
            price: parseFloat(data.c[0]),
            volume: parseFloat(data.v[1]),
            bid: parseFloat(data.b[0]),
            ask: parseFloat(data.a[0]),
          })
        }

        if (channelName === 'trade' && onTrade) {
          const trades = msg[1]
          for (const t of trades) {
            onTrade({
              id: `kraken-ws-${symbol}-${t[2]}`,
              pair: `${symbol}/USD`,
              price: parseFloat(t[0]),
              amount: parseFloat(t[1]),
              side: t[3] === 'b' ? 'buy' : 'sell',
              time: Math.floor(parseFloat(t[2]) * 1000),
              source: 'kraken',
            })
          }
        }
      } catch (e) { /* ignore parse errors */ }
    }

    ws.onclose = () => {
      if (!closed) {
        reconnectTimer = setTimeout(connect, 3000)
      }
    }

    ws.onerror = () => {
      ws?.close()
    }
  }

  connect()

  return {
    close: () => {
      closed = true
      if (reconnectTimer) clearTimeout(reconnectTimer)
      ws?.close()
    },
  }
}

// ============================================================
// Supported symbols list
// ============================================================

export const SUPPORTED_SYMBOLS = Object.keys(KRAKEN_PAIRS)

export const SYMBOL_META: Record<string, { name: string; icon: string; color: string }> = {
  BTC:  { name: 'Bitcoin',   icon: '₿', color: '#f7931a' },
  ETH:  { name: 'Ethereum',  icon: 'Ξ', color: '#627eea' },
  SOL:  { name: 'Solana',    icon: 'S', color: '#9945ff' },
  AVAX: { name: 'Avalanche', icon: 'A', color: '#e84142' },
  MATIC:{ name: 'Polygon',   icon: 'M', color: '#8247e5' },
  DOT:  { name: 'Polkadot',  icon: 'D', color: '#e6007a' },
  LINK: { name: 'Chainlink', icon: 'L', color: '#2a5ada' },
  UNI:  { name: 'Uniswap',   icon: 'U', color: '#ff007a' },
  AAVE: { name: 'Aave',      icon: 'A', color: '#b6509e' },
  ARB:  { name: 'Arbitrum',  icon: 'A', color: '#28a0f0' },
  OP:   { name: 'Optimism',  icon: 'O', color: '#ff0420' },
}
