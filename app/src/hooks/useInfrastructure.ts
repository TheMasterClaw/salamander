'use client'

import { useState, useEffect } from 'react'
import { getAllNetworkStatus, NetworkStatus } from '@/lib/blockchain'
import { getOracleStatuses, getOraclePrices, OracleStatus, AggregatedOraclePrice } from '@/lib/oracles'
import { getDexStats, DexStats } from '@/lib/dex'

// ============================================================
// useNetworkStatus — Live chain health for all networks
// ============================================================

export function useNetworkStatus(pollInterval: number = 15_000) {
  const [networks, setNetworks] = useState<NetworkStatus[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await getAllNetworkStatus()
        if (!cancelled) {
          setNetworks(data)
          setLoading(false)
        }
      } catch (e) {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, pollInterval)
    return () => { cancelled = true; clearInterval(timer) }
  }, [pollInterval])

  return { networks, loading }
}

// ============================================================
// useOracleStatus — Oracle health and feed counts
// ============================================================

export function useOracleStatus() {
  const [oracles, setOracles] = useState<OracleStatus[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await getOracleStatuses()
        if (!cancelled) {
          setOracles(data)
          setLoading(false)
        }
      } catch (e) {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, 30_000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [])

  return { oracles, loading }
}

// ============================================================
// useOraclePrices — Cross-validated oracle prices
// ============================================================

export function useOraclePrices(pairs: string[] = ['BTC/USD', 'ETH/USD', 'SOL/USD']) {
  const [prices, setPrices] = useState<AggregatedOraclePrice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await getOraclePrices(pairs)
        if (!cancelled) {
          setPrices(data)
          setLoading(false)
        }
      } catch (e) {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, 15_000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [pairs.join(',')])

  return { prices, loading }
}

// ============================================================
// useDexStats — DEX protocol stats
// ============================================================

export function useDexStats() {
  const [dexes, setDexes] = useState<DexStats[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await getDexStats()
        if (!cancelled) {
          setDexes(data)
          setLoading(false)
        }
      } catch (e) {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    const timer = setInterval(fetch, 60_000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [])

  return { dexes, loading }
}
