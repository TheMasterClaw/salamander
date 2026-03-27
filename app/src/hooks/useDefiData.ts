'use client'

import { useState, useEffect } from 'react'
import {
  getTopYields,
  defiLlamaProtocols,
  defiLlamaChainTVL,
  DefiPool,
  ProtocolTVL,
} from '@/lib/exchanges'

// ============================================================
// useDefiYields — Top yield farming opportunities
// ============================================================

interface UseDefiYieldsOptions {
  chains?: string[]
  minTvl?: number
  maxApy?: number
  limit?: number
  pollInterval?: number
}

export function useDefiYields(options: UseDefiYieldsOptions = {}) {
  const {
    chains = ['Ethereum', 'Base', 'Arbitrum', 'Polygon', 'Optimism'],
    minTvl = 100_000,
    maxApy = 500,
    limit = 20,
    pollInterval = 120_000, // 2 min
  } = options

  const [pools, setPools] = useState<DefiPool[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await getTopYields(chains)
        if (cancelled) return

        const filtered = data
          .filter(p => p.tvlUsd >= minTvl && p.apy <= maxApy && p.apy > 0)
          .slice(0, limit)

        setPools(filtered)
        setError(null)
      } catch (e: any) {
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, pollInterval)
    return () => { cancelled = true; clearInterval(timer) }
  }, [chains.join(','), minTvl, maxApy, limit, pollInterval])

  // Computed stats
  const stats = {
    totalPools: pools.length,
    avgApy: pools.length ? pools.reduce((s, p) => s + p.apy, 0) / pools.length : 0,
    maxApyPool: pools.reduce((max, p) => p.apy > (max?.apy || 0) ? p : max, pools[0]),
    totalTvl: pools.reduce((s, p) => s + p.tvlUsd, 0),
    byChain: chains.reduce((acc, chain) => {
      const chainPools = pools.filter(p => p.chain?.toLowerCase() === chain.toLowerCase())
      acc[chain] = {
        count: chainPools.length,
        avgApy: chainPools.length ? chainPools.reduce((s, p) => s + p.apy, 0) / chainPools.length : 0,
        totalTvl: chainPools.reduce((s, p) => s + p.tvlUsd, 0),
      }
      return acc
    }, {} as Record<string, { count: number; avgApy: number; totalTvl: number }>),
  }

  return { pools, loading, error, stats }
}

// ============================================================
// useProtocols — Top DeFi protocols by TVL
// ============================================================

export function useProtocols() {
  const [protocols, setProtocols] = useState<ProtocolTVL[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await defiLlamaProtocols()
        if (!cancelled) {
          setProtocols(data)
          setLoading(false)
        }
      } catch (e) {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, 300_000) // 5 min
    return () => { cancelled = true; clearInterval(timer) }
  }, [])

  return { protocols, loading }
}

// ============================================================
// useChainTVL — TVL per chain
// ============================================================

export function useChainTVL() {
  const [tvl, setTvl] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await defiLlamaChainTVL()
        if (!cancelled) {
          setTvl(data)
          setLoading(false)
        }
      } catch (e) {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, 300_000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [])

  return { tvl, loading }
}
