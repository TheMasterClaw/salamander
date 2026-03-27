'use client'

import { SYMBOL_META } from '@/lib/exchanges'
import { useMarketData } from '@/hooks/useMarketData'
import Sparkline from './Sparkline'

const DEFAULT_SYMBOLS = ['BTC', 'ETH', 'SOL', 'AVAX', 'MATIC', 'ARB', 'LINK', 'OP']

export default function MarketTicker() {
  const { prices, loading, error, lastUpdate, source } = useMarketData({
    symbols: DEFAULT_SYMBOLS,
    pollInterval: 12_000,
    useWebSocket: true,
  })

  if (loading && prices.length === 0) {
    return (
      <section className="py-6" id="dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>📊 Live Market</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span className="text-[10px] font-mono" style={{ color: 'var(--text2)' }}>Loading...</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton-card h-36 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  const sortedPrices = [...prices].sort((a, b) => (b.marketCap || b.volumeUsd24h) - (a.marketCap || a.volumeUsd24h))

  return (
    <section className="py-6" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>📊 Live Market</span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <div className="flex items-center gap-3">
            {error && (
              <span className="text-[10px] font-mono text-red-400">⚠ {error}</span>
            )}
            <span className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: 'var(--text2)' }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: source === 'websocket' ? 'var(--green)' : '#d29922' }} />
              {source === 'websocket' ? 'Kraken WS' : 'Kraken + Binance + CoinGecko'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
          {sortedPrices.slice(0, 8).map((p, i) => {
            const isUp = p.change24h >= 0
            const meta = SYMBOL_META[p.symbol] || { icon: p.symbol[0], color: '#8b949e', name: p.symbol }
            const hasSparkline = p.sparkline7d && p.sparkline7d.length > 10

            // Format volume
            const volStr = p.volumeUsd24h >= 1e9
              ? `$${(p.volumeUsd24h / 1e9).toFixed(1)}B`
              : p.volumeUsd24h >= 1e6
                ? `$${(p.volumeUsd24h / 1e6).toFixed(1)}M`
                : `$${(p.volumeUsd24h / 1e3).toFixed(0)}K`

            // Format market cap
            const mcapStr = p.marketCap >= 1e12
              ? `$${(p.marketCap / 1e12).toFixed(2)}T`
              : p.marketCap >= 1e9
                ? `$${(p.marketCap / 1e9).toFixed(1)}B`
                : p.marketCap >= 1e6
                  ? `$${(p.marketCap / 1e6).toFixed(0)}M`
                  : ''

            // Position within 24h range
            const range = p.high24h - p.low24h
            const position = range > 0 ? ((p.price - p.low24h) / range) * 100 : 50

            return (
              <div key={p.symbol} className="card group cursor-pointer hover:scale-[1.02] transition-all duration-200 fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: meta.color }}>
                      {meta.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold block leading-tight">{p.symbol}</span>
                      <span className="text-[9px] leading-tight" style={{ color: 'var(--text2)' }}>{meta.name}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ${isUp ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                    {isUp ? '▲' : '▼'} {Math.abs(p.change24h).toFixed(2)}%
                  </span>
                </div>

                {/* Price */}
                <div className={`text-xl font-bold font-mono mb-1 ${isUp ? 'text-green-400' : 'text-red-400'}`}>
                  ${p.price.toLocaleString(undefined, { maximumFractionDigits: p.price > 100 ? 0 : p.price > 1 ? 2 : 4 })}
                </div>

                {/* Sparkline (7-day from CoinGecko) */}
                {hasSparkline && (
                  <div className="mb-2">
                    <Sparkline
                      data={p.sparkline7d.filter((_, idx) => idx % 4 === 0)} // Downsample for performance
                      width={200}
                      height={32}
                      color={isUp ? '#3fb950' : '#f85149'}
                    />
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] font-mono" style={{ color: 'var(--text2)' }}>
                  <span>Vol: {volStr}</span>
                  {mcapStr && <span>MCap: {mcapStr}</span>}
                </div>

                {/* Range bar */}
                <div className="mt-2">
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${Math.max(2, Math.min(98, position))}%`, background: isUp ? 'var(--green)' : 'var(--red)' }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono mt-0.5" style={{ color: 'var(--text2)' }}>
                    <span>${p.low24h.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    <span>${p.high24h.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>

                {/* Source indicator */}
                <div className="mt-1 text-right">
                  <span className="text-[8px] font-mono" style={{ color: 'var(--text2)', opacity: 0.5 }}>
                    {p.source}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Last update timestamp */}
        <div className="flex items-center justify-end gap-2 mt-2">
          <span className="text-[9px] font-mono" style={{ color: 'var(--text2)', opacity: 0.6 }}>
            Last update: {lastUpdate ? new Date(lastUpdate).toLocaleTimeString() : '—'} · Sources: Kraken, Binance, CoinGecko
          </span>
        </div>
      </div>
    </section>
  )
}
