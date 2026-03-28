'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderV2 from '@/components/HeaderV2'
import Hero from '@/components/Hero'
import MarketTicker from '@/components/MarketTicker'
import TradingChart from '@/components/TradingChart'
import TradePanel from '@/components/TradePanel'
import AgentCards from '@/components/AgentCards'
import AgentDeployer from '@/components/AgentDeployer'
import PortfolioOverview from '@/components/PortfolioOverview'
import TrustLayer from '@/components/TrustLayer'
import TradeFeed from '@/components/TradeFeed'
import InfrastructureDashboard from '@/components/InfrastructureDashboard'

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

// Dashboard View
function DashboardView() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <Hero />
      <MarketTicker />
      
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TradingChart symbol="BTC" height={400} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TradeFeed />
          </div>
          <div className="lg:col-span-1">
            <InfrastructureDashboard />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Trade View
function TradeView() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Trade</h1>
          <p className="text-zinc-400">Execute trades across multiple chains with AI-powered routing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <TradingChart symbol="BTC" height={500} />
          </div>
          <div className="lg:col-span-1">
            <TradePanel />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Agents View
function AgentsView() {
  const [showDeployer, setShowDeployer] = useState(false)
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI Agents</h1>
            <p className="text-zinc-400">Deploy and manage autonomous trading agents</p>
          </div>
          
          <motion.button
            onClick={() => setShowDeployer(!showDeployer)}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showDeployer ? '← Back to Agents' : '+ Deploy New Agent'}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {showDeployer ? (
            <motion.div
              key="deployer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AgentDeployer />
            </motion.div>
          ) : (
            <motion.div
              key="agents"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <AgentCards />
              <TrustLayer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// Portfolio View
function PortfolioView() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-zinc-400">Track your performance and agent allocations</p>
        </div>

        <PortfolioOverview />
      </div>
    </motion.div>
  )
}

export default function DashboardV2() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-[#06080c]">
      <HeaderV2 activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-20 pb-12">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && <DashboardView key="dashboard" />}
          {activeTab === 'trade' && <TradeView key="trade" />}
          {activeTab === 'agents' && <AgentsView key="agents" />}
          {activeTab === 'portfolio' && <PortfolioView key="portfolio" />}
        </AnimatePresence>
      </main>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#06080c]/95 backdrop-blur-xl border-t border-white/5 z-50"
        >
          <div className="flex justify-around py-3">
            {[
              { id: 'dashboard', icon: '📊', label: 'Home' },
              { id: 'trade', icon: '💱', label: 'Trade' },
              { id: 'agents', icon: '🤖', label: 'Agents' },
              { id: 'portfolio', icon: '💼', label: 'Portfolio' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'text-green-400 bg-green-500/10' 
                    : 'text-zinc-400'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}
