'use client'

import Sparkline from './Sparkline'

const portfolioSparkData = [100, 105, 103, 110, 108, 115, 120, 118, 125, 130, 128, 135, 140, 138, 145, 150, 148, 155, 160, 165]

const METRICS = [
  { label: 'Total Value', value: '$16,731.50', change: '+12.4%', up: true, icon: '💰' },
  { label: 'Total PnL', value: '+$4,731.50', change: 'All Time', up: true, icon: '📈' },
  { label: 'Active Agents', value: '3 / 4', change: '75% online', up: true, icon: '🤖' },
  { label: 'Avg Win Rate', value: '72.3%', change: '+3.1% MoM', up: true, icon: '🎯' },
]

const ALLOCATIONS = [
  { name: 'Yield-Farm', pct: 42, color: '#22c55e', pnl: '+$8,102' },
  { name: 'Alpha-1', pct: 28, color: '#3b82f6', pnl: '+$4,247' },
  { name: 'Flash-9', pct: 18, color: '#a855f7', pnl: '+$2,892' },
  { name: 'Shield-X', pct: 12, color: '#f59e0b', pnl: '+$1,489' },
]

const RECENT_PERFORMANCE = [
  { period: '24h', pnl: '+$342.80', pct: '+2.1%', up: true },
  { period: '7d', pnl: '+$1,247.50', pct: '+8.1%', up: true },
  { period: '30d', pnl: '+$4,731.50', pct: '+12.4%', up: true },
]

export default function PortfolioOverview() {
  return (
    <section className="py-8" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>💼 Portfolio Overview</span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>

        {/* Top metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {METRICS.map((m, i) => (
            <div key={i} className="card fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">{m.icon}</span>
                <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ${m.up ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {m.change}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono" style={{ color: m.up ? 'var(--green)' : 'var(--red)' }}>
                {m.value}
              </div>
              <div className="text-[11px] mt-1" style={{ color: 'var(--text2)' }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Portfolio chart */}
          <div className="card lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>Portfolio Value</span>
              <div className="flex gap-1">
                {['1D', '1W', '1M', 'ALL'].map(p => (
                  <button key={p} className="px-2 py-1 rounded text-[10px] font-mono font-medium"
                    style={{
                      background: p === '1M' ? 'rgba(34,197,94,0.15)' : 'transparent',
                      color: p === '1M' ? 'var(--salamander)' : 'var(--text2)',
                    }}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Large chart area */}
            <div className="relative rounded-xl overflow-hidden" style={{ background: 'var(--bg)', height: '200px' }}>
              <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,180 C40,170 80,165 120,160 C160,155 200,150 240,135 C280,120 320,130 360,110 C400,90 440,100 480,80 C520,60 560,70 600,50 C640,30 680,40 720,25 C760,15 780,20 800,10 L800,200 L0,200 Z"
                  fill="url(#portfolioGrad)" />
                <path d="M0,180 C40,170 80,165 120,160 C160,155 200,150 240,135 C280,120 320,130 360,110 C400,90 440,100 480,80 C520,60 560,70 600,50 C640,30 680,40 720,25 C760,15 780,20 800,10"
                  fill="none" stroke="#22c55e" strokeWidth="2" />
                {/* Grid lines */}
                {[50, 100, 150].map(y => (
                  <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4,4" />
                ))}
              </svg>
              <div className="absolute top-3 left-3">
                <div className="text-2xl font-bold font-mono text-green-400">$16,731.50</div>
                <div className="text-xs font-mono text-green-400/70">+$342.80 today (+2.1%)</div>
              </div>
            </div>

            {/* Performance periods */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {RECENT_PERFORMANCE.map((p, i) => (
                <div key={i} className="text-center p-2.5 rounded-lg" style={{ background: 'var(--surface2)' }}>
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text2)' }}>{p.period}</div>
                  <div className={`text-sm font-bold font-mono ${p.up ? 'text-green-400' : 'text-red-400'}`}>{p.pnl}</div>
                  <div className={`text-[10px] font-mono ${p.up ? 'text-green-400/60' : 'text-red-400/60'}`}>{p.pct}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Allocation breakdown */}
          <div className="card">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>Agent Allocation</span>

            {/* Allocation bar */}
            <div className="flex rounded-full overflow-hidden h-3 mt-4 mb-4" style={{ background: 'var(--border)' }}>
              {ALLOCATIONS.map((a, i) => (
                <div key={i} className="h-full transition-all duration-1000" style={{ width: `${a.pct}%`, background: a.color }} />
              ))}
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {ALLOCATIONS.map((a, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: a.color }} />
                    <span className="text-sm font-medium">{a.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-green-400">{a.pnl}</span>
                    <span className="text-xs font-mono" style={{ color: 'var(--text2)' }}>{a.pct}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Risk meter */}
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>Portfolio Risk</span>
                <span className="text-xs font-mono" style={{ color: '#d29922' }}>Medium</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                <div className="h-full rounded-full" style={{ width: '55%', background: 'linear-gradient(90deg, var(--green), #d29922)' }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px]" style={{ color: 'var(--green)' }}>Conservative</span>
                <span className="text-[9px]" style={{ color: 'var(--red)' }}>Aggressive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
