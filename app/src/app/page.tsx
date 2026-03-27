'use client'

import { useState, useEffect } from 'react'
import { useAppKitAccount } from '@reown/appkit/react'
import { useReadContract } from 'wagmi'
import { CONTRACTS } from '@/config'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MarketTicker from '@/components/MarketTicker'
import AgentCards from '@/components/AgentCards'
import PortfolioOverview from '@/components/PortfolioOverview'
import TrustLayer from '@/components/TrustLayer'
import TradeFeed from '@/components/TradeFeed'
import DeployAgent from '@/components/DeployAgent'

const AgentRegistryABI = [
  { inputs: [], name: 'totalAgents', outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' },
] as const

export default function Home() {
  const { address, isConnected } = useAppKitAccount()
  const [activeSection, setActiveSection] = useState('dashboard')

  const { data: totalAgents } = useReadContract({
    address: CONTRACTS[84532].AgentRegistry,
    abi: AgentRegistryABI,
    functionName: 'totalAgents',
    chainId: 84532,
  })

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Update active section on scroll
  useEffect(() => {
    const sections = ['hero', 'dashboard', 'agents', 'portfolio', 'trade', 'trust']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Wallet connection banner */}
      {isConnected && (
        <div className="border-b" style={{ borderColor: 'var(--border)', background: 'rgba(34,197,94,0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--green)' }} />
              <span className="text-xs font-mono" style={{ color: 'var(--text2)' }}>
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded"
                style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--salamander)' }}>
                Base Sepolia
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text2)' }}>
              <span>On-chain Agents: <span className="font-bold font-mono" style={{ color: 'var(--salamander)' }}>{totalAgents?.toString() || '0'}</span></span>
            </div>
          </div>
        </div>
      )}

      <Hero />
      <MarketTicker />
      <AgentCards />
      <PortfolioOverview />
      <TradeFeed />
      <TrustLayer />
      <DeployAgent />

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl logo-glow">🦎</span>
                <span className="font-bold">Salamander</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>
                Trustless AI trading agents for any EVM chain. Built on ERC-8004.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: 'Product',
                links: ['Dashboard', 'Agents', 'Portfolio', 'Deploy'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'ERC-8004 Spec', 'API Reference', 'GitHub'],
              },
              {
                title: 'Community',
                links: ['Discord', 'Twitter', 'Blog', 'Hackathon'],
              },
            ].map((col, i) => (
              <div key={i}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text2)' }}>{col.title}</div>
                <div className="space-y-2">
                  {col.links.map((link, j) => (
                    <a key={j} href="#" className="block text-xs transition-colors hover:text-green-400" style={{ color: 'var(--text2)' }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid var(--border)' }}>
            <p className="text-xs" style={{ color: 'var(--text2)' }}>
              Built with 🦎 for the{' '}
              <a href="https://lablab.ai/ai-hackathons/ai-trading-agents" className="underline" style={{ color: 'var(--salamander)' }}>
                AI Trading Agents Hackathon
              </a>{' '}
              — lablab.ai × Surge × Kraken
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/TheMasterClaw/salamander" target="_blank" className="text-xs underline" style={{ color: 'var(--text2)' }}>
                GitHub
              </a>
              <a href="https://base-sepolia.blockscout.com" target="_blank" className="text-xs underline" style={{ color: 'var(--text2)' }}>
                Contracts
              </a>
              <span className="text-[10px] font-mono" style={{ color: 'var(--text2)' }}>v0.1.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
