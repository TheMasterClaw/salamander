'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  getMarketData,
  getOHLC,
  krakenOrderBook,
  krakenRecentTrades,
  createKrakenWebSocket,
  TokenPrice,
  OHLCCandle,
  OrderBook,
  RecentTrade,
  SYMBOL_META,
} from '@/lib/exchanges'

// ============================================================
// useMarketData — Live prices with WebSocket updates
// ============================================================

interface UseMarketDataOptions {
  symbols?: string[]
  pollInterval?: number     // REST poll fallback in ms (default 15s)
  useWebSocket?: boolean    // Use Kraken WS for real-time (default true)
}

interface MarketDataState {
  prices: TokenPrice[]
  loading: boolean
  error: string | null
  lastUpdate: number
  source: 'rest' | 'websocket'
}

export function useMarketData(options: UseMarketDataOptions = {}) {
  const {
    symbols = ['BTC', 'ETH', 'SOL', 'AVAX', 'MATIC'],
    pollInterval = 15_000,
    useWebSocket = true,
  } = options

  const [state, setState] = useState<MarketDataState>({
    prices: [],
    loading: true,
    error: null,
    lastUpdate: 0,
    source: 'rest',
  })

  const wsRef = useRef<{ close: () => void } | null>(null)
  const pricesRef = useRef<Map<string, TokenPrice>>(new Map())

  // REST fetch (initial + fallback)
  const fetchPrices = useCallback(async () => {
    try {
      const data = await getMarketData(symbols)

      // Merge into ref
      for (const p of data) {
        const existing = pricesRef.current.get(p.symbol)
        pricesRef.current.set(p.symbol, {
          ...p,
          // Keep sparkline from CoinGecko if we already have it
          sparkline7d: p.sparkline7d.length > 0 ? p.sparkline7d : (existing?.sparkline7d || []),
        })
      }

      setState(prev => ({
        ...prev,
        prices: Array.from(pricesRef.current.values()),
        loading: false,
        error: null,
        lastUpdate: Date.now(),
        source: 'rest',
      }))
    } catch (e: any) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: e.message || 'Failed to fetch prices',
      }))
    }
  }, [symbols.join(',')])

  // Initial fetch
  useEffect(() => {
    fetchPrices()
  }, [fetchPrices])

  // REST polling (as fallback or primary if WS disabled)
  useEffect(() => {
    const interval = setInterval(fetchPrices, pollInterval)
    return () => clearInterval(interval)
  }, [fetchPrices, pollInterval])

  // WebSocket for real-time updates
  useEffect(() => {
    if (!useWebSocket || typeof window === 'undefined') return

    // Wait for initial REST data before connecting WS
    const timer = setTimeout(() => {
      wsRef.current = createKrakenWebSocket(
        symbols,
        (symbol, data) => {
          const existing = pricesRef.current.get(symbol)
          if (existing) {
            const updated: TokenPrice = {
              ...existing,
              price: data.price,
              volume24h: data.volume,
              updatedAt: Date.now(),
            }

            // Recalculate change based on stored open
            if (existing.high24h && existing.low24h) {
              const open = existing.price / (1 + existing.change24h / 100)
              updated.change24h = ((data.price - open) / open) * 100
            }

            pricesRef.current.set(symbol, updated)

            setState(prev => ({
              ...prev,
              prices: Array.from(pricesRef.current.values()),
              lastUpdate: Date.now(),
              source: 'websocket',
            }))
          }
        }
      )
    }, 2000) // Delay WS connection to let REST load first

    return () => {
      clearTimeout(timer)
      wsRef.current?.close()
    }
  }, [symbols.join(','), useWebSocket])

  return {
    ...state,
    refetch: fetchPrices,
    getPrice: (symbol: string) => pricesRef.current.get(symbol),
  }
}

// ============================================================
// useOHLC — Candlestick chart data
// ============================================================

export function useOHLC(symbol: string, interval: string = '1h') {
  const [candles, setCandles] = useState<OHLCCandle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      setLoading(true)
      try {
        const data = await getOHLC(symbol, interval)
        if (!cancelled) setCandles(data)
      } catch (e) {
        console.error('OHLC fetch error:', e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, 60_000) // refresh every minute

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [symbol, interval])

  return { candles, loading }
}

// ============================================================
// useOrderBook — Live order book
// ============================================================

export function useOrderBook(symbol: string, depth: number = 20) {
  const [book, setBook] = useState<OrderBook | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await krakenOrderBook(symbol, depth)
        if (!cancelled) {
          setBook(data)
          setLoading(false)
        }
      } catch (e) {
        console.error('Order book fetch error:', e)
      }
    }

    fetch()
    const timer = setInterval(fetch, 5_000) // refresh every 5s

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [symbol, depth])

  return { book, loading }
}

// ============================================================
// useRecentTrades — Live trade feed from exchange
// ============================================================

export function useRecentTrades(symbols: string[] = ['BTC', 'ETH', 'SOL']) {
  const [trades, setTrades] = useState<RecentTrade[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchAll() {
      try {
        const results = await Promise.allSettled(
          symbols.map(s => krakenRecentTrades(s))
        )

        if (cancelled) return

        const allTrades: RecentTrade[] = []
        for (const r of results) {
          if (r.status === 'fulfilled') allTrades.push(...r.value)
        }

        // Sort by time descending, take latest 50
        allTrades.sort((a, b) => b.time - a.time)
        setTrades(allTrades.slice(0, 50))
        setLoading(false)
      } catch (e) {
        console.error('Trades fetch error:', e)
      }
    }

    fetchAll()
    const timer = setInterval(fetchAll, 10_000)

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [symbols.join(',')])

  // Also connect WebSocket for real-time trades
  useEffect(() => {
    if (typeof window === 'undefined') return

    const ws = createKrakenWebSocket(
      symbols,
      () => {}, // don't need ticker here
      (trade) => {
        setTrades(prev => [trade, ...prev.slice(0, 49)])
      }
    )

    return () => ws.close()
  }, [symbols.join(',')])

  return { trades, loading }
}
