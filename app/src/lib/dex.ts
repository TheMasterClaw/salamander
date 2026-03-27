/**
 * Salamander DEX Aggregator Layer
 * 
 * On-chain swap routing and liquidity data:
 * - 1inch: Best swap routes across 400+ DEXs
 * - 0x/Matcha: Professional-grade swap API
 * - Paraswap: Multi-DEX aggregation
 * - Uniswap (The Graph): Pool data, TVL, volume
 * - Odos: Smart order routing
 * 
 * All free-tier APIs, no keys required for quotes.
 */

// ============================================================
// Types
// ============================================================

export interface SwapQuote {
  source: string
  fromToken: string
  toToken: string
  fromAmount: string
  toAmount: string
  toAmountUsd: number
  priceImpact: number
  gasEstimate: number
  route: string[]         // DEXs used in the route
  chain: string
  updatedAt: number
}

export interface DexPool {
  id: string
  dex: string
  chain: string
  token0: { symbol: string; address: string }
  token1: { symbol: string; address: string }
  tvlUsd: number
  volume24h: number
  fee: number             // Fee tier (e.g., 0.3%)
  apy: number
  price: number           // Current pool price
}

export interface DexStats {
  name: string
  chain: string
  tvl: number
  volume24h: number
  pools: number
  status: 'online' | 'degraded' | 'offline'
  icon: string
  url: string
}

// ============================================================
// 1INCH — Best Swap Routes
// Docs: https://docs.1inch.io/
// Free for quotes (no key needed for basic usage)
// ============================================================

const ONEINCH_BASE = 'https://api.1inch.dev/swap/v6.0'

// 1inch chain IDs
const ONEINCH_CHAINS: Record<string, number> = {
  ethereum: 1,
  base: 8453,
  arbitrum: 42161,
  polygon: 137,
  optimism: 10,
}

// Common token addresses per chain
const TOKEN_ADDRESSES: Record<string, Record<string, string>> = {
  ethereum: {
    ETH:  '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    DAI:  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    UNI:  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  },
  base: {
    ETH:  '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    WETH: '0x4200000000000000000000000000000000000006',
    USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    USDbC:'0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
  },
  arbitrum: {
    ETH:  '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    WETH: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    USDC: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    ARB:  '0x912CE59144191C1204E64559FE8253a0e49E6548',
  },
  polygon: {
    MATIC:'0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    WMATIC:'0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    USDC: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  optimism: {
    ETH:  '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    WETH: '0x4200000000000000000000000000000000000006',
    USDC: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    OP:   '0x4200000000000000000000000000000000000042',
  },
}

// Note: 1inch v6 requires API key for production. We use their public fusion endpoint as fallback.
// For hackathon demo, we can use the public quote endpoint.
export async function oneInchQuote(
  chainKey: string,
  fromSymbol: string,
  toSymbol: string,
  amount: string, // in wei
): Promise<SwapQuote | null> {
  const chainId = ONEINCH_CHAINS[chainKey]
  const tokens = TOKEN_ADDRESSES[chainKey]
  if (!chainId || !tokens) return null

  const fromToken = tokens[fromSymbol]
  const toToken = tokens[toSymbol]
  if (!fromToken || !toToken) return null

  try {
    // Use 1inch Fusion+ public API for quotes (no key needed)
    const res = await fetch(
      `https://api.1inch.dev/fusion-plus/quoter/v1.0/${chainId}/quote/receive?srcTokenAddress=${fromToken}&dstTokenAddress=${toToken}&amount=${amount}`,
      { headers: { 'Accept': 'application/json' } }
    )

    if (!res.ok) return null
    const data = await res.json()

    return {
      source: '1inch',
      fromToken: fromSymbol,
      toToken: toSymbol,
      fromAmount: amount,
      toAmount: data.dstTokenAmount || data.toAmount || '0',
      toAmountUsd: 0,
      priceImpact: 0,
      gasEstimate: parseInt(data.estimatedGas || '0'),
      route: ['1inch Fusion+'],
      chain: chainKey,
      updatedAt: Date.now(),
    }
  } catch (e) {
    return null
  }
}

// ============================================================
// 0x / MATCHA — Professional Swap API
// Docs: https://0x.org/docs/
// Free tier available
// ============================================================

const ZX_BASE: Record<string, string> = {
  ethereum: 'https://api.0x.org',
  base:     'https://base.api.0x.org',
  arbitrum: 'https://arbitrum.api.0x.org',
  polygon:  'https://polygon.api.0x.org',
  optimism: 'https://optimism.api.0x.org',
}

export async function zeroXQuote(
  chainKey: string,
  fromSymbol: string,
  toSymbol: string,
  amount: string,
): Promise<SwapQuote | null> {
  const base = ZX_BASE[chainKey]
  const tokens = TOKEN_ADDRESSES[chainKey]
  if (!base || !tokens) return null

  const sellToken = tokens[fromSymbol]
  const buyToken = tokens[toSymbol]
  if (!sellToken || !buyToken) return null

  try {
    const res = await fetch(
      `${base}/swap/v1/price?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${amount}`,
      { headers: { 'Accept': 'application/json' } }
    )

    if (!res.ok) return null
    const data = await res.json()

    return {
      source: '0x',
      fromToken: fromSymbol,
      toToken: toSymbol,
      fromAmount: amount,
      toAmount: data.buyAmount || '0',
      toAmountUsd: parseFloat(data.buyAmountInUsd || '0'),
      priceImpact: parseFloat(data.estimatedPriceImpact || '0'),
      gasEstimate: parseInt(data.estimatedGas || '0'),
      route: data.sources?.filter((s: any) => parseFloat(s.proportion) > 0).map((s: any) => s.name) || ['0x'],
      chain: chainKey,
      updatedAt: Date.now(),
    }
  } catch (e) {
    return null
  }
}

// ============================================================
// PARASWAP — Multi-DEX Aggregation
// Docs: https://developers.paraswap.network/
// Free, no API key
// ============================================================

const PARASWAP_BASE = 'https://apiv5.paraswap.io'

const PARASWAP_CHAIN_IDS: Record<string, number> = {
  ethereum: 1,
  base: 8453,
  arbitrum: 42161,
  polygon: 137,
  optimism: 10,
}

export async function paraswapQuote(
  chainKey: string,
  fromSymbol: string,
  toSymbol: string,
  amount: string,
  decimals: number = 18,
): Promise<SwapQuote | null> {
  const chainId = PARASWAP_CHAIN_IDS[chainKey]
  const tokens = TOKEN_ADDRESSES[chainKey]
  if (!chainId || !tokens) return null

  const srcToken = tokens[fromSymbol]
  const destToken = tokens[toSymbol]
  if (!srcToken || !destToken) return null

  try {
    const res = await fetch(
      `${PARASWAP_BASE}/prices?srcToken=${srcToken}&srcDecimals=${decimals}&destToken=${destToken}&destDecimals=${decimals}&amount=${amount}&network=${chainId}&side=SELL`
    )

    if (!res.ok) return null
    const data = await res.json()
    const best = data.priceRoute

    return {
      source: 'paraswap',
      fromToken: fromSymbol,
      toToken: toSymbol,
      fromAmount: amount,
      toAmount: best?.destAmount || '0',
      toAmountUsd: parseFloat(best?.destUSD || '0'),
      priceImpact: parseFloat(best?.priceImpact || '0'),
      gasEstimate: parseInt(best?.gasCost || '0'),
      route: best?.bestRoute?.[0]?.swaps?.[0]?.swapExchanges?.map((e: any) => e.exchange) || ['Paraswap'],
      chain: chainKey,
      updatedAt: Date.now(),
    }
  } catch (e) {
    return null
  }
}

// ============================================================
// THE GRAPH — Uniswap V3 Subgraph
// Free for querying (hosted service)
// ============================================================

const UNISWAP_SUBGRAPHS: Record<string, string> = {
  ethereum: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  base:     'https://api.studio.thegraph.com/query/48211/uniswap-v3-base/version/latest',
  arbitrum: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-arbitrum',
  polygon:  'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon',
  optimism: 'https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis',
}

export async function uniswapTopPools(chainKey: string, limit: number = 10): Promise<DexPool[]> {
  const endpoint = UNISWAP_SUBGRAPHS[chainKey]
  if (!endpoint) return []

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          pools(first: ${limit}, orderBy: totalValueLockedUSD, orderDirection: desc) {
            id
            token0 { symbol id }
            token1 { symbol id }
            totalValueLockedUSD
            volumeUSD
            feeTier
            token0Price
            token1Price
          }
        }`
      }),
    })

    if (!res.ok) return []
    const json = await res.json()
    const pools = json.data?.pools || []

    return pools.map((p: any) => ({
      id: p.id,
      dex: 'Uniswap V3',
      chain: chainKey,
      token0: { symbol: p.token0.symbol, address: p.token0.id },
      token1: { symbol: p.token1.symbol, address: p.token1.id },
      tvlUsd: parseFloat(p.totalValueLockedUSD),
      volume24h: parseFloat(p.volumeUSD),
      fee: parseInt(p.feeTier) / 10000,
      apy: 0, // Would need historical data to calculate
      price: parseFloat(p.token0Price),
    }))
  } catch (e) {
    return []
  }
}

// ============================================================
// DEXSCREENER — Universal DEX Data
// Docs: https://docs.dexscreener.com/api
// Free, no key, generous rate limits
// ============================================================

const DEXSCREENER_BASE = 'https://api.dexscreener.com/latest/dex'

export interface DexScreenerPair {
  chainId: string
  dexId: string
  pairAddress: string
  baseToken: { symbol: string; name: string; address: string }
  quoteToken: { symbol: string; name: string; address: string }
  priceUsd: number
  priceChange24h: number
  volume24h: number
  liquidity: number
  txns24h: { buys: number; sells: number }
  url: string
}

export async function dexScreenerSearch(query: string): Promise<DexScreenerPair[]> {
  try {
    const res = await fetch(`${DEXSCREENER_BASE}/search?q=${encodeURIComponent(query)}`)
    if (!res.ok) return []
    const data = await res.json()
    
    return (data.pairs || []).slice(0, 20).map((p: any) => ({
      chainId: p.chainId,
      dexId: p.dexId,
      pairAddress: p.pairAddress,
      baseToken: p.baseToken,
      quoteToken: p.quoteToken,
      priceUsd: parseFloat(p.priceUsd || '0'),
      priceChange24h: parseFloat(p.priceChange?.h24 || '0'),
      volume24h: parseFloat(p.volume?.h24 || '0'),
      liquidity: parseFloat(p.liquidity?.usd || '0'),
      txns24h: {
        buys: p.txns?.h24?.buys || 0,
        sells: p.txns?.h24?.sells || 0,
      },
      url: p.url || '',
    }))
  } catch (e) {
    return []
  }
}

export async function dexScreenerTopByChain(chain: string): Promise<DexScreenerPair[]> {
  try {
    const res = await fetch(`${DEXSCREENER_BASE}/pairs/${chain}`)
    if (!res.ok) return []
    const data = await res.json()
    return (data.pairs || []).slice(0, 20)
  } catch (e) {
    return []
  }
}

// ============================================================
// Aggregated DEX Stats
// ============================================================

export async function getDexStats(): Promise<DexStats[]> {
  // Static DEX info + dynamic checks could be added
  return [
    {
      name: 'Uniswap V3',
      chain: 'Multi-chain',
      tvl: 5_200_000_000,
      volume24h: 1_800_000_000,
      pools: 15000,
      status: 'online',
      icon: '🦄',
      url: 'https://app.uniswap.org',
    },
    {
      name: 'Aerodrome',
      chain: 'Base',
      tvl: 800_000_000,
      volume24h: 350_000_000,
      pools: 2000,
      status: 'online',
      icon: '✈️',
      url: 'https://aerodrome.finance',
    },
    {
      name: 'Curve',
      chain: 'Multi-chain',
      tvl: 2_100_000_000,
      volume24h: 200_000_000,
      pools: 5000,
      status: 'online',
      icon: '🔵',
      url: 'https://curve.fi',
    },
    {
      name: 'Camelot',
      chain: 'Arbitrum',
      tvl: 120_000_000,
      volume24h: 45_000_000,
      pools: 800,
      status: 'online',
      icon: '⚔️',
      url: 'https://app.camelot.exchange',
    },
    {
      name: 'Velodrome',
      chain: 'Optimism',
      tvl: 300_000_000,
      volume24h: 80_000_000,
      pools: 1200,
      status: 'online',
      icon: '🏎️',
      url: 'https://velodrome.finance',
    },
    {
      name: 'QuickSwap',
      chain: 'Polygon',
      tvl: 150_000_000,
      volume24h: 35_000_000,
      pools: 3000,
      status: 'online',
      icon: '🐉',
      url: 'https://quickswap.exchange',
    },
  ]
}

// ============================================================
// Best Quote Aggregator
// Gets quotes from multiple DEX aggregators and picks the best
// ============================================================

export async function getBestQuote(
  chainKey: string,
  fromSymbol: string,
  toSymbol: string,
  amount: string,
): Promise<{ best: SwapQuote | null; all: SwapQuote[] }> {
  const results = await Promise.allSettled([
    zeroXQuote(chainKey, fromSymbol, toSymbol, amount),
    paraswapQuote(chainKey, fromSymbol, toSymbol, amount),
  ])

  const quotes: SwapQuote[] = results
    .filter((r): r is PromiseFulfilledResult<SwapQuote | null> => r.status === 'fulfilled')
    .map(r => r.value)
    .filter((q): q is SwapQuote => q !== null && q.toAmount !== '0')

  // Sort by output amount (best quote = most tokens received)
  quotes.sort((a, b) => {
    const aAmt = BigInt(b.toAmount)
    const bAmt = BigInt(a.toAmount)
    return aAmt > bAmt ? 1 : aAmt < bAmt ? -1 : 0
  })

  return {
    best: quotes[0] || null,
    all: quotes,
  }
}
