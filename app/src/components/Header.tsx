'use client'

import { useState, useEffect } from 'react'

const CHAINS = [
  { id: 'base', name: 'Base', color: '#0052FF' },
  { id: 'ethereum', name: 'Ethereum', color: '#627eea' },
  { id: 'arbitrum', name: 'Arbitrum', color: '#28A0F0' },
  { id: 'polygon', name: 'Polygon', color: '#8247E5' },
  { id: 'optimism', name: 'Optimism', color: '#FF0420' },
]

const NAV_ITEMS = ['Dashboard', 'Agents', 'Portfolio', 'Trade', 'Trust']

export default function Header({ activeSection, onNavigate }: { activeSection: string; onNavigate: (s: string) => void }) {
  const [selectedChain, setSelectedChain] = useState('base')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'header-blur' : ''}`}
      style={{ background: scrolled ? 'rgba(10,14,20,0.85)' : 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('hero')}>
            <span className="text-2xl sm:text-3xl logo-glow">🦎</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-bold tracking-tight">Salamander</span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--salamander)' }}>v0.1</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'nav-active'
                    : 'nav-inactive'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Chain selector (desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
              {CHAINS.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedChain(c.id)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 ${
                    selectedChain === c.id ? 'chain-active' : 'chain-inactive'
                  }`}
                  style={selectedChain === c.id ? { background: `${c.color}20`, color: c.color, borderColor: `${c.color}40` } : {}}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Live badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(63,185,80,0.12)', color: 'var(--green)' }}>
              <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--green)' }}></div>
              <span className="hidden sm:inline">LIVE</span>
            </div>

            {/* Wallet */}
            <appkit-button />

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: 'var(--text2)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></>
                ) : (
                  <><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="14" x2="17" y2="14"/></>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 fade-in">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => { onNavigate(item.toLowerCase()); setMobileMenuOpen(false) }}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium"
                style={{
                  color: activeSection === item.toLowerCase() ? 'var(--salamander)' : 'var(--text2)',
                  background: activeSection === item.toLowerCase() ? 'rgba(34,197,94,0.1)' : 'transparent',
                }}
              >
                {item}
              </button>
            ))}
            {/* Mobile chain selector */}
            <div className="flex flex-wrap gap-2 px-3 pt-2">
              {CHAINS.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedChain(c.id)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{
                    border: '1px solid var(--border)',
                    color: selectedChain === c.id ? c.color : 'var(--text2)',
                    background: selectedChain === c.id ? `${c.color}15` : 'transparent',
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
