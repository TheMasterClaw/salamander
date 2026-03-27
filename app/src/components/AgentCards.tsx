'use client'

import { useState } from 'react'
import Sparkline from './Sparkline'

interface Agent {
  id: string
  name: string
  type: string
  icon: string
  status: 'running' | 'idle' | 'paused'
  strategy: string
  chain: string
  trades: number
  winRate: number
  pnl: number
  trustScore: number
  sparkData: number[]
  riskLevel: 'Low' | 'Medium' | 'High'
  description: string
}

const AGENTS: Agent[] = [
  {
    id: '1', name: 'Alpha-1', type: 'Momentum', icon: '🏃', status: 'running',
    strategy: 'Trend following with breakout detection. Uses RSI, MACD, and volume analysis to identify momentum shifts.',
    chain: 'Base', trades: 247, winRate: 68, pnl: 4247.50, trustScore: 87,
    sparkData: [30, 35, 32, 40, 38, 45, 42, 50, 48, 55, 52, 60, 58, 65, 62, 68],
    riskLevel: 'Medium',
    description: 'Aggressive momentum trader targeting 2-8h swing trades on high-volume pairs.',
  },
  {
    id: '2', name: 'Shield-X', type: 'Protection', icon: '🛡️', status: 'running',
    strategy: 'Dynamic hedging with automated stop-losses. Monitors portfolio drawdown and rebalances positions.',
    chain: 'Arbitrum', trades: 123, winRate: 82, pnl: 1489.20, trustScore: 94,
    sparkData: [50, 52, 51, 53, 54, 53, 55, 54, 56, 57, 56, 58, 57, 59, 60, 61],
    riskLevel: 'Low',
    description: 'Conservative protection agent focused on capital preservation and risk-adjusted returns.',
  },
  {
    id: '3', name: 'Yield-Farm', type: 'Yield', icon: '🌾', status: 'running',
    strategy: 'Multi-protocol LP optimization. Auto-compounds rewards and migrates between highest-yield pools.',
    chain: 'Polygon', trades: 456, winRate: 71, pnl: 8102.80, trustScore: 79,
    sparkData: [20, 25, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 72],
    riskLevel: 'Medium',
    description: 'Yield optimizer scanning 50+ DeFi protocols for optimal APY with impermanent loss monitoring.',
  },
  {
    id: '4', name: 'Flash-9', type: 'Flash', icon: '⚡', status: 'idle',
    strategy: 'MEV and atomic arbitrage. Detects cross-DEX price discrepancies and executes in single transactions.',
    chain: 'Ethereum', trades: 38, winRate: 92, pnl: 2892.00, trustScore: 71,
    sparkData: [40, 42, 50, 48, 55, 70, 65, 72, 68, 80, 75, 85, 78, 90, 82, 88],
    riskLevel: 'High',
    description: 'High-frequency flash agent. Executes atomic arbitrage across DEXs with MEV protection.',
  },
]

const STATUS_STYLES = {
  running: { bg: 'rgba(63,185,80,0.15)', color: 'var(--green)', label: '● RUNNING' },
  idle: { bg: 'rgba(139,148,158,0.15)', color: 'var(--text2)', label: '○ IDLE' },
  paused: { bg: 'rgba(210,153,34,0.15)', color: '#d29922', label: '◐ PAUSED' },
}

const RISK_COLORS = {
  Low: 'var(--green)',
  Medium: '#d29922',
  High: 'var(--red)',
}

export default function AgentCards() {
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null)

  return (
    <section className="py-8" id="agents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>🤖 Active Agents</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <button className="btn-sm">
            <span>+</span> Deploy New
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AGENTS.map((agent, i) => {
            const status = STATUS_STYLES[agent.status]
            const isExpanded = expandedAgent === agent.id
            const isUp = agent.pnl >= 0

            return (
              <div
                key={agent.id}
                className={`card cursor-pointer transition-all duration-300 fade-in-up ${isExpanded ? 'ring-1' : ''}`}
                style={{
                  animationDelay: `${i * 100}ms`,
                  ...(isExpanded ? { borderColor: 'rgba(34,197,94,0.4)' } : {}),
                }}
                onClick={() => setExpandedAgent(isExpanded ? null : agent.id)}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: 'var(--surface2)' }}>
                      {agent.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{agent.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                          style={{ background: status.bg, color: status.color }}>
                          {status.label}
                        </span>
                      </div>
                      <div className="text-xs flex items-center gap-2 mt-0.5" style={{ color: 'var(--text2)' }}>
                        <span>{agent.type}</span>
                        <span>·</span>
                        <span>{agent.chain}</span>
                        <span>·</span>
                        <span style={{ color: RISK_COLORS[agent.riskLevel] }}>{agent.riskLevel} Risk</span>
                      </div>
                    </div>
                  </div>
                  <Sparkline data={agent.sparkData} width={80} height={28} color={isUp ? '#3fb950' : '#f85149'} />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3 mb-2">
                  {[
                    { label: 'Trades', value: agent.trades.toString(), color: 'var(--text)' },
                    { label: 'Win Rate', value: `${agent.winRate}%`, color: agent.winRate >= 70 ? 'var(--green)' : agent.winRate >= 50 ? '#d29922' : 'var(--red)' },
                    { label: 'PnL', value: `${isUp ? '+' : ''}$${Math.abs(agent.pnl).toLocaleString()}`, color: isUp ? 'var(--green)' : 'var(--red)' },
                    { label: 'Trust', value: `${agent.trustScore}/100`, color: 'var(--salamander)' },
                  ].map((s, j) => (
                    <div key={j} className="text-center p-2 rounded-lg" style={{ background: 'var(--surface2)' }}>
                      <div className="text-sm font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-[10px] mt-0.5" style={{ color: 'var(--text2)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust score bar */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px]" style={{ color: 'var(--text2)' }}>ERC-8004 Trust</span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${agent.trustScore}%`, background: `linear-gradient(90deg, var(--salamander), #4ade80)` }} />
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: 'var(--salamander)' }}>{agent.trustScore}%</span>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 space-y-3 fade-in" style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text2)' }}>Description</div>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>{agent.description}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text2)' }}>Strategy</div>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>{agent.strategy}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-sm flex-1">📊 View Trades</button>
                      <button className="btn-sm flex-1" style={{ color: agent.status === 'running' ? '#d29922' : 'var(--green)' }}>
                        {agent.status === 'running' ? '⏸ Pause' : '▶ Resume'}
                      </button>
                      <button className="btn-sm" style={{ color: 'var(--red)' }}>🗑</button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
