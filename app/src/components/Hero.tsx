'use client'

import { useEffect, useState } from 'react'

function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <section className="relative overflow-hidden" id="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-grid" />
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(34,197,94,0.12)', color: 'var(--salamander)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--salamander)' }} />
              Built on ERC-8004 · Trustless by Default
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="block">AI Trading Agents</span>
              <span className="block hero-gradient-text">You Can Trust</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text2)' }}>
              Deploy autonomous trading agents across any EVM chain. 
              On-chain identity, verifiable reputation, and trustless execution — 
              powered by Kraken and validated by the network.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button className="btn-primary">
                <span>🚀</span> Launch Agent
              </button>
              <button className="btn-secondary">
                <span>📖</span> Read Docs
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { label: 'Agents Live', value: 4, prefix: '' },
                { label: 'Trades Executed', value: 1247, prefix: '' },
                { label: 'Chains Supported', value: 5, prefix: '' },
              ].map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: 'var(--salamander)' }}>
                    <AnimatedCounter target={s.value} prefix={s.prefix} />
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text2)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex-1 w-full max-w-lg">
            <div className="hero-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🦎</span>
                  <span className="text-sm font-semibold">Alpha-1 Agent</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(63,185,80,0.15)', color: 'var(--green)' }}>RUNNING</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'var(--text2)' }}>Base</span>
              </div>

              {/* Simulated chart */}
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden" style={{ background: 'var(--bg)' }}>
                <svg viewBox="0 0 400 130" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,100 C30,95 60,80 100,75 C140,70 160,85 200,60 C240,35 260,50 300,30 C340,10 370,25 400,15 L400,130 L0,130 Z"
                    fill="url(#chartGrad)" className="chart-area-animate" />
                  <path d="M0,100 C30,95 60,80 100,75 C140,70 160,85 200,60 C240,35 260,50 300,30 C340,10 370,25 400,15"
                    fill="none" stroke="#22c55e" strokeWidth="2.5" className="chart-line-animate" />
                  <circle cx="400" cy="15" r="4" fill="#22c55e" className="chart-dot-pulse" />
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Win Rate', value: '68%', color: 'var(--green)' },
                  { label: 'PnL', value: '+$1,247', color: 'var(--green)' },
                  { label: 'Trust Score', value: '87/100', color: 'var(--salamander)' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-2.5 rounded-lg" style={{ background: 'var(--bg)' }}>
                    <div className="text-base font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--text2)' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent trades */}
              <div className="mt-4 space-y-1.5">
                {[
                  { time: '2m ago', action: 'BUY', pair: 'ETH/USD', amount: '+$42.80', up: true },
                  { time: '8m ago', action: 'SELL', pair: 'BTC/USD', amount: '+$128.50', up: true },
                  { time: '14m ago', action: 'BUY', pair: 'SOL/USD', amount: '-$18.20', up: false },
                ].map((t, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-1.5 px-2 rounded"
                    style={{ background: 'rgba(10,14,20,0.5)' }}>
                    <span className="font-mono" style={{ color: 'var(--text2)' }}>{t.time}</span>
                    <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[10px] ${t.action === 'BUY' ? 'text-green-400 bg-green-400/15' : 'text-red-400 bg-red-400/15'}`}>
                      {t.action}
                    </span>
                    <span className="font-medium">{t.pair}</span>
                    <span className={`font-mono font-semibold ${t.up ? 'text-green-400' : 'text-red-400'}`}>{t.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bounce-slow hidden sm:block">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="var(--text2)" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <line x1="10" y1="8" x2="10" y2="14" className="scroll-line" />
        </svg>
      </div>
    </section>
  )
}
