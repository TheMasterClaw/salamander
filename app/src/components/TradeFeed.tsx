'use client'

import { useState, useEffect, useRef } from 'react'
import { useRecentTrades } from '@/hooks/useMarketData'
import { SYMBOL_META, RecentTrade } from '@/lib/exchanges'

const TRACKED_SYMBOLS = ['BTC', 'ETH', 'SOL']

export default function TradeFeed() {
  const { trades: realTrades, loading } = useRecentTrades(TRACKED_SYMBOLS)
  const [paused, setPaused] = useState(false)
  const [displayTrades, setDisplayTrades] = useState<RecentTrade[]>([])
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  // When new real trades come in, update display (unless paused)
  useEffect(() => {
    if (!pausedRef.current) {
      setDisplayTrades(realTrades.slice(0, 30))
    }
  }, [realTrades])

  const stats = {
    total: displayTrades.length,
    buys: displayTrades.filter(t => t.side === 'buy').length,
    sells: displayTrades.filter(t => t.side === 'sell').length,
    volume: displayTrades.reduce((sum, t) => sum + t.price * t.amount, 0),
  }

  const volStr = stats.volume >= 1e6
    ? `$${(stats.volume / 1e6).toFixed(1)}M`
    : stats.volume >= 1e3
      ? `$${(stats.volume / 1e3).toFixed(1)}K`
      : `$${stats.volume.toFixed(0)}`

  return (
    <section className="py-8" id="trade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>📜 Live Trade Feed</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono">
              <span style={{ color: 'var(--text2)' }}>Buys: <span className="text-green-400">{stats.buys}</span></span>
              <span style={{ color: 'var(--text2)' }}>Sells: <span className="text-red-400">{stats.sells}</span></span>
              <span style={{ color: 'var(--text2)' }}>Vol: <span className="text-blue-400">{volStr}</span></span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-mono"
              style={{ background: 'rgba(63,185,80,0.1)', color: 'var(--green)' }}>
              <span className="w-1 h-1 rounded-full pulse-dot" style={{ background: 'var(--green)' }} />
              Kraken Live
            </div>
            <button
              onClick={() => setPaused(!paused)}
              className="btn-sm text-[10px]"
              style={{ color: paused ? 'var(--green)' : 'var(--text2)' }}
            >
              {paused ? '▶ Resume' : '⏸ Pause'}
            </button>
          </div>
        </div>

        <div className="card">
          {/* Table header */}
          <div className="grid grid-cols-[70px_1fr_60px_80px_90px] sm:grid-cols-[80px_100px_1fr_70px_100px_80px_100px] gap-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: 'var(--text2)', borderBottom: '1px solid var(--border)' }}>
            <span>Time</span>
            <span className="hidden sm:block">Source</span>
            <span>Pair</span>
            <span className="text-center">Side</span>
            <span className="hidden sm:block text-right">Amount</span>
            <span className="text-right">Price</span>
            <span className="text-right">Value</span>
          </div>

          {/* Loading state */}
          {loading && displayTrades.length === 0 && (
            <div className="py-12 text-center">
              <div className="text-sm" style={{ color: 'var(--text2)' }}>
                Connecting to Kraken...
              </div>
              <div className="mt-2 flex justify-center gap-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--salamander)', animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
            </div>
          )}

          {/* Trade rows */}
          <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
            {displayTrades.map((t, i) => {
              const isBuy = t.side === 'buy'
              const value = t.price * t.amount
              const symbol = t.pair.split('/')[0]

              const valueStr = value >= 1e6
                ? `$${(value / 1e6).toFixed(2)}M`
                : value >= 1e3
                  ? `$${(value / 1e3).toFixed(1)}K`
                  : `$${value.toFixed(2)}`

              const amountStr = t.amount >= 1
                ? t.amount.toFixed(4)
                : t.amount.toFixed(6)

              const timeStr = new Date(t.time).toLocaleTimeString(undefined, {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
              })

              return (
                <div
                  key={t.id}
                  className={`grid grid-cols-[70px_1fr_60px_80px_90px] sm:grid-cols-[80px_100px_1fr_70px_100px_80px_100px] gap-2 px-3 py-2 text-xs items-center transition-colors hover:bg-white/[0.02] ${i === 0 && !paused ? 'trade-flash' : ''}`}
                  style={{ borderBottom: '1px solid rgba(30,42,58,0.5)' }}
                >
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text2)' }}>{timeStr}</span>
                  <span className="hidden sm:flex items-center gap-1 text-[10px]" style={{ color: 'var(--text2)' }}>
                    <span className="w-1 h-1 rounded-full" style={{ background: 'var(--green)' }} />
                    Kraken
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    {SYMBOL_META[symbol] && (
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                        style={{ background: SYMBOL_META[symbol].color }}>
                        {SYMBOL_META[symbol].icon}
                      </span>
                    )}
                    <span className="truncate">{t.pair}</span>
                  </span>
                  <span className="text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                      isBuy ? 'text-green-400 bg-green-400/15' : 'text-red-400 bg-red-400/15'
                    }`}>
                      {isBuy ? 'BUY' : 'SELL'}
                    </span>
                  </span>
                  <span className="hidden sm:block text-right font-mono text-[11px]" style={{ color: 'var(--text2)' }}>
                    {amountStr} {symbol}
                  </span>
                  <span className="text-right font-mono text-[11px]" style={{ color: 'var(--text)' }}>
                    ${t.price.toLocaleString(undefined, { maximumFractionDigits: t.price > 100 ? 0 : 2 })}
                  </span>
                  <span className={`text-right font-mono font-semibold text-[11px] ${isBuy ? 'text-green-400' : 'text-red-400'}`}>
                    {valueStr}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          {displayTrades.length > 0 && (
            <div className="px-3 py-2 flex items-center justify-between text-[9px] font-mono" style={{ borderTop: '1px solid var(--border)', color: 'var(--text2)' }}>
              <span>{displayTrades.length} trades shown · Real-time via Kraken WebSocket</span>
              <span>
                {TRACKED_SYMBOLS.map(s => (
                  <span key={s} className="inline-flex items-center gap-1 mr-2">
                    <span className="w-1.5 h-1.5 rounded-sm" style={{ background: SYMBOL_META[s]?.color || '#888' }} />
                    {s}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
