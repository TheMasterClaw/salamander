'use client'

import { useState } from 'react'

const REGISTRIES = [
  {
    icon: '📝',
    name: 'Identity Registry',
    description: 'Every agent gets an NFT-based on-chain identity. Portable across chains, censorship-resistant, and verifiable by anyone.',
    stats: [
      { label: 'Registered', value: '4 agents' },
      { label: 'Chains', value: '5 networks' },
    ],
    color: '#58a6ff',
    details: [
      'ERC-721 NFT minted per agent',
      'Stores agent type, owner, endpoint',
      'Transferable between wallets',
      'Cross-chain identity bridging planned',
    ],
  },
  {
    icon: '⭐',
    name: 'Reputation Registry',
    description: 'On-chain trade history, win rates, PnL tracking, and peer feedback. Trust scores computed from verifiable performance data.',
    stats: [
      { label: 'Avg Score', value: '87/100' },
      { label: 'Trades Logged', value: '864' },
    ],
    color: '#d29922',
    details: [
      'Every trade recorded on-chain',
      'Win rate, PnL, drawdown tracked',
      'Peer feedback from other agents',
      'Time-weighted scoring (recent > old)',
    ],
  },
  {
    icon: '🛡️',
    name: 'Validation Registry',
    description: 'Independent verification via stake re-execution, zkML proofs, or TEE attestation. Trust without trusting.',
    stats: [
      { label: 'Approval Rate', value: '94%' },
      { label: 'Validators', value: '12 nodes' },
    ],
    color: '#bc8cff',
    details: [
      'Stake re-execution: replay trades independently',
      'zkML proofs: verify AI decisions without revealing model',
      'TEE attestation: hardware-secured execution',
      'Slashing for dishonest validation',
    ],
  },
]

export default function TrustLayer() {
  const [expandedRegistry, setExpandedRegistry] = useState<number | null>(null)

  return (
    <section className="py-8" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>🔗 ERC-8004 Trust Layer</span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
        <p className="text-sm mb-6 max-w-2xl" style={{ color: 'var(--text2)' }}>
          Salamander agents don't ask for trust — they earn it. Three on-chain registries work together 
          to create a verifiable reputation system for autonomous AI agents.
        </p>

        {/* Trust flow diagram */}
        <div className="card mb-6 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4">
            {[
              { step: '1', label: 'Register', icon: '📝', desc: 'Agent mints NFT identity' },
              { step: '→', label: '', icon: '', desc: '' },
              { step: '2', label: 'Trade', icon: '📊', desc: 'Execute strategies on-chain' },
              { step: '→', label: '', icon: '', desc: '' },
              { step: '3', label: 'Score', icon: '⭐', desc: 'Build verifiable reputation' },
              { step: '→', label: '', icon: '', desc: '' },
              { step: '4', label: 'Validate', icon: '✅', desc: 'Independent verification' },
            ].map((item, i) => (
              item.step === '→' ? (
                <div key={i} className="hidden sm:block text-xl" style={{ color: 'var(--salamander)' }}>→</div>
              ) : (
                <div key={i} className="text-center flex-1 fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-2"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    {item.icon}
                  </div>
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text2)' }}>{item.desc}</div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Registry cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REGISTRIES.map((reg, i) => {
            const isExpanded = expandedRegistry === i
            return (
              <div
                key={i}
                className="card cursor-pointer transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${i * 120}ms`, ...(isExpanded ? { borderColor: `${reg.color}40` } : {}) }}
                onClick={() => setExpandedRegistry(isExpanded ? null : i)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{reg.icon}</span>
                  <span className="font-bold text-sm">{reg.name}</span>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>
                  {reg.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {reg.stats.map((s, j) => (
                    <div key={j} className="p-2 rounded-lg text-center" style={{ background: 'var(--surface2)' }}>
                      <div className="text-sm font-bold font-mono" style={{ color: reg.color }}>{s.value}</div>
                      <div className="text-[10px]" style={{ color: 'var(--text2)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-4 pt-3 space-y-2 fade-in" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>How it works</div>
                    {reg.details.map((d, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text)' }}>
                        <span style={{ color: reg.color }}>•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expand indicator */}
                <div className="text-center mt-2">
                  <span className="text-[10px]" style={{ color: 'var(--text2)' }}>
                    {isExpanded ? '▲ Less' : '▼ More'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Salamander protocol callout */}
        <div className="card mt-4" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-3xl">🦎</div>
            <div className="flex-1">
              <div className="font-bold mb-1" style={{ color: 'var(--salamander)' }}>The Salamander Principle</div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>
                Trust is proportional to value at risk. A $10 trade needs minimal validation. 
                A $100K position gets full stake re-execution + zkML proof. The protocol adapts — just like its namesake.
              </p>
            </div>
            <div className="flex gap-2 text-xs font-mono">
              <span className="px-2 py-1 rounded" style={{ background: 'rgba(63,185,80,0.15)', color: 'var(--green)' }}>Low: Quick ✓</span>
              <span className="px-2 py-1 rounded" style={{ background: 'rgba(210,153,34,0.15)', color: '#d29922' }}>Mid: Verified</span>
              <span className="px-2 py-1 rounded" style={{ background: 'rgba(188,140,255,0.15)', color: '#bc8cff' }}>High: Full Proof</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
