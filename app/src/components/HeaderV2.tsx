'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Wallet,
  Settings,
  BarChart3,
  Zap,
  Shield,
  Cpu
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'trade', label: 'Trade', icon: Activity },
  { id: 'agents', label: 'Agents', icon: Cpu },
  { id: 'portfolio', label: 'Portfolio', icon: Wallet },
]

const CHAINS = [
  { id: 'base', name: 'Base', color: '#0052FF', gas: '0.001' },
  { id: 'ethereum', name: 'Ethereum', color: '#627eea', gas: '0.05' },
  { id: 'arbitrum', name: 'Arbitrum', color: '#28A0F0', gas: '0.002' },
  { id: 'polygon', name: 'Polygon', color: '#8247E5', gas: '0.001' },
  { id: 'optimism', name: 'Optimism', color: '#FF0420', gas: '0.001' },
]

export default function HeaderV2({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [selectedChain, setSelectedChain] = useState('base')
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const connectWallet = () => {
    setWalletConnected(true)
    setWalletAddress('0x742d...8a2e')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#06080c]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="relative">
              <span className="text-3xl">🦎</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-white">Salamander</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                BETA
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-xl p-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-green-500/15 rounded-lg border border-green-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {item.label}
                  </span>
                </motion.button>
              )
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Chain Selector */}
            <div className="hidden lg:flex items-center gap-2 bg-white/5 rounded-xl p-1.5">
              {CHAINS.slice(0, 3).map((chain) => (
                <motion.button
                  key={chain.id}
                  onClick={() => setSelectedChain(chain.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedChain === chain.id 
                      ? 'bg-white/10 text-white' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ background: chain.color }}
                  />
                  {chain.name}
                </motion.button>
              ))}
            </div>

            {/* Wallet Button */}
            <motion.button
              onClick={connectWallet}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                walletConnected
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-green-500 text-black hover:bg-green-400'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {walletConnected ? (
                <>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono">{walletAddress}</span>
                </>
              ) : (
                <>
                  <Wallet size={16} />
                  Connect Wallet
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
