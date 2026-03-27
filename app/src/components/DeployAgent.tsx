'use client'

import { useState } from 'react'

const AGENT_TYPES = [
  {
    type: 'momentum',
    icon: '🏃',
    name: 'Momentum Trader',
    description: 'Trend following with breakout detection. Best for volatile markets with clear directional moves.',
    risk: 'Medium',
    avgReturn: '+12-25%',
    minStake: '0.01 ETH',
  },
  {
    type: 'shield',
    icon: '🛡️',
    name: 'Shield Protector',
    description: 'Dynamic hedging and stop-loss management. Protects your portfolio during drawdowns.',
    risk: 'Low',
    avgReturn: '+5-12%',
    minStake: '0.005 ETH',
  },
  {
    type: 'yield',
    icon: '🌾',
    name: 'Yield Optimizer',
    description: 'Multi-protocol LP optimization with auto-compounding. Maximizes yield across DeFi.',
    risk: 'Medium-High',
    avgReturn: '+15-40%',
    minStake: '0.02 ETH',
  },
  {
    type: 'flash',
    icon: '⚡',
    name: 'Flash Arbitrageur',
    description: 'Cross-DEX atomic arbitrage and MEV extraction. High frequency, high reward.',
    risk: 'High',
    avgReturn: '+20-60%',
    minStake: '0.05 ETH',
  },
]

const RISK_COLORS: Record<string, string> = {
  'Low': 'var(--green)',
  'Medium': '#d29922',
  'Medium-High': '#f59e0b',
  'High': 'var(--red)',
}

export default function DeployAgent() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [step, setStep] = useState(1)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* CTA Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: 'rgba(34,197,94,0.12)', color: 'var(--salamander)', border: '1px solid rgba(34,197,94,0.2)' }}>
            🚀 Deploy Your Agent
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Launch a Trustless Trading Agent
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text2)' }}>
            Choose a strategy, configure parameters, and deploy to any EVM chain. 
            Your agent gets an ERC-8004 identity and starts building reputation immediately.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { num: 1, label: 'Choose Strategy' },
            { num: 2, label: 'Configure' },
            { num: 3, label: 'Deploy' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step >= s.num ? 'step-active' : 'step-inactive'
              }`}>
                {step > s.num ? '✓' : s.num}
              </div>
              <span className="text-xs font-medium hidden sm:inline" style={{ color: step >= s.num ? 'var(--text)' : 'var(--text2)' }}>
                {s.label}
              </span>
              {i < 2 && <div className="w-8 sm:w-16 h-px mx-2" style={{ background: step > s.num ? 'var(--salamander)' : 'var(--border)' }} />}
            </div>
          ))}
        </div>

        {/* Agent type selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AGENT_TYPES.map((agent, i) => {
            const isSelected = selectedType === agent.type
            return (
              <div
                key={agent.type}
                className={`card cursor-pointer transition-all duration-300 hover:scale-[1.02] fade-in-up ${isSelected ? 'ring-1' : ''}`}
                style={{
                  animationDelay: `${i * 100}ms`,
                  ...(isSelected ? { borderColor: 'rgba(34,197,94,0.5)', background: 'rgba(34,197,94,0.05)' } : {}),
                }}
                onClick={() => { setSelectedType(agent.type); setStep(2) }}
              >
                <div className="text-3xl mb-3">{agent.icon}</div>
                <div className="font-bold text-sm mb-1">{agent.name}</div>
                <p className="text-[11px] leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>
                  {agent.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text2)' }}>Risk</span>
                    <span className="font-mono font-semibold" style={{ color: RISK_COLORS[agent.risk] }}>{agent.risk}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text2)' }}>Avg Return</span>
                    <span className="font-mono font-semibold text-green-400">{agent.avgReturn}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text2)' }}>Min Stake</span>
                    <span className="font-mono" style={{ color: 'var(--text)' }}>{agent.minStake}</span>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-4 pt-3 fade-in" style={{ borderTop: '1px solid var(--border)' }}>
                    <button className="btn-primary w-full text-sm">
                      Configure {agent.name} →
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-xs mb-3" style={{ color: 'var(--text2)' }}>
            Need a custom strategy? <a href="#" className="underline" style={{ color: 'var(--salamander)' }}>Contact us</a> or{' '}
            <a href="https://github.com/TheMasterClaw/salamander" target="_blank" className="underline" style={{ color: 'var(--salamander)' }}>build your own</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
