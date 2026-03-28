'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Settings, 
  TrendingUp, 
  Shield, 
  Zap, 
  Sprout,
  ChevronRight,
  Check,
  AlertTriangle,
  Cpu,
  Activity
} from 'lucide-react'

const STRATEGIES = [
  {
    id: 'momentum',
    name: 'Momentum Trader',
    icon: TrendingUp,
    description: 'Trend following with breakout detection. Best for volatile markets.',
    risk: 'Medium',
    riskColor: 'text-yellow-400',
    minReturn: '+12%',
    maxReturn: '+45%',
    winRate: 68,
    params: ['RSI Period', 'MACD Fast', 'MACD Slow', 'Volume Threshold'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'shield',
    name: 'Shield Protector',
    icon: Shield,
    description: 'Dynamic hedging and stop-loss management. Capital preservation focused.',
    risk: 'Low',
    riskColor: 'text-green-400',
    minReturn: '+5%',
    maxReturn: '+15%',
    winRate: 82,
    params: ['Max Drawdown', 'Hedge Ratio', 'Rebalance Frequency'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'yield',
    name: 'Yield Optimizer',
    icon: Sprout,
    description: 'Multi-protocol LP optimization with auto-compounding.',
    risk: 'Medium-High',
    riskColor: 'text-orange-400',
    minReturn: '+15%',
    maxReturn: '+60%',
    winRate: 71,
    params: ['Min APY', 'Max IL Tolerance', 'Reinvest Threshold'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'flash',
    name: 'Flash Arbitrage',
    icon: Zap,
    description: 'Cross-DEX atomic arbitrage and MEV extraction.',
    risk: 'High',
    riskColor: 'text-red-400',
    minReturn: '+20%',
    maxReturn: '+120%',
    winRate: 92,
    params: ['Min Spread', 'Gas Multiplier', 'Max Slippage'],
    color: 'from-red-500 to-orange-500'
  }
]

const CHAINS = [
  { id: 'base', name: 'Base', icon: '🔵', gas: '~$0.01' },
  { id: 'ethereum', name: 'Ethereum', icon: '💎', gas: '~$5-20' },
  { id: 'arbitrum', name: 'Arbitrum', icon: '🔷', gas: '~$0.50' },
  { id: 'polygon', name: 'Polygon', icon: '🟣', gas: '~$0.01' },
]

export default function AgentDeployer() {
  const [step, setStep] = useState(1)
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null)
  const [selectedChain, setSelectedChain] = useState('base')
  const [capital, setCapital] = useState('1.0')
  const [agentName, setAgentName] = useState('')
  const [isDeploying, setIsDeploying] = useState(false)
  const [deployed, setDeployed] = useState(false)

  const strategy = STRATEGIES.find(s => s.id === selectedStrategy)

  const deploy = () => {
    setIsDeploying(true)
    setTimeout(() => {
      setIsDeploying(false)
      setDeployed(true)
    }, 3000)
  }

  if (deployed) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-glow text-center py-16"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <Check size={40} className="text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Agent Deployed! 🦎</h2>
        <p className="text-zinc-400 mb-6">Your {strategy?.name} is now live on {CHAINS.find(c => c.id === selectedChain)?.name}</p>
        
        <div className="bg-white/5 rounded-xl p-4 max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-zinc-400">Agent ID</span>
            <span className="text-white font-mono">AG-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-zinc-400">Strategy</span>
            <span className="text-white">{strategy?.name}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-zinc-400">Capital</span>
            <span className="text-white font-mono">${parseFloat(capital).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Status</span>
            <span className="text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Active
            </span>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Deploy Another Agent
        </button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s, i) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step >= s 
                ? 'bg-green-500 text-black' 
                : 'bg-white/5 text-zinc-500 border border-white/10'
            }`}>
              {step > s ? <Check size={18} /> : s}
            </div>
            {i < 2 && (
              <div className={`w-20 h-1 mx-2 transition-all ${
                step > s ? 'bg-green-500' : 'bg-white/10'
              }`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-white text-center mb-2">Choose Your Strategy</h2>
            <p className="text-zinc-400 text-center mb-8">Select an AI trading strategy that matches your risk tolerance</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STRATEGIES.map((strat) => {
                const Icon = strat.icon
                const isSelected = selectedStrategy === strat.id
                return (
                  <motion.button
                    key={strat.id}
                    onClick={() => setSelectedStrategy(strat.id)}
                    className={`relative p-6 rounded-2xl text-left transition-all border ${
                      isSelected 
                        ? 'bg-white/10 border-green-500/50 shadow-lg shadow-green-500/10' 
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.07]'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <Check size={14} className="text-black" />
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strat.color} flex items-center justify-center mb-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-1">{strat.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{strat.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className={strat.riskColor}>{strat.risk} Risk</span>
                      <span className="text-zinc-500">·</span>
                      <span className="text-green-400">{strat.minReturn}-{strat.maxReturn}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div className="flex justify-end mt-8">
              <motion.button
                onClick={() => selectedStrategy && setStep(2)}
                disabled={!selectedStrategy}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={selectedStrategy ? { scale: 1.02 } : {}}
                whileTap={selectedStrategy ? { scale: 0.98 } : {}}
              >
                Continue
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-white text-center mb-2">Configure Agent</h2>
            <p className="text-zinc-400 text-center mb-8">Set your deployment parameters</p>

            <div className="card-glass space-y-6">
              {/* Agent Name */}
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Agent Name</label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="My Trading Agent"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>

              {/* Chain Selection */}
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Select Chain</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {CHAINS.map((chain) => (
                    <button
                      key={chain.id}
                      onClick={() => setSelectedChain(chain.id)}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        selectedChain === chain.id
                          ? 'bg-green-500/10 border-green-500/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/[0.07]'
                      }`}
                    >
                      <span className="text-2xl block mb-1">{chain.icon}</span>
                      <span className="text-sm font-medium text-white">{chain.name}</span>
                      <span className="text-[10px] text-zinc-500 block">{chain.gas}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Capital */}
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Trading Capital (ETH)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-lg font-mono focus:outline-none focus:border-green-500/50 transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">ETH</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">≈ ${(parseFloat(capital) * 3500).toLocaleString()} USD</p>
              </div>

              {/* Risk Warning */}
              {strategy?.risk === 'High' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm text-red-400 font-medium">High Risk Strategy</p>
                    <p className="text-xs text-zinc-400 mt-1">This strategy uses leverage and carries significant liquidation risk. Only invest what you can afford to lose.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(1)} className="btn-secondary">Back</button>
              <motion.button
                onClick={() => setStep(3)}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Review & Deploy
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-white text-center mb-2">Review Deployment</h2>
            <p className="text-zinc-400 text-center mb-8">Confirm your agent configuration</p>

            <div className="card-glass max-w-lg mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-zinc-400">Strategy</span>
                  <div className="flex items-center gap-2">
                    {strategy && (
                      <>
                        <strategy.icon size={16} className="text-green-400" />
                        <span className="text-white font-medium">{strategy.name}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-zinc-400">Chain</span>
                  <span className="text-white">{CHAINS.find(c => c.id === selectedChain)?.name}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-zinc-400">Capital</span>
                  <span className="text-white font-mono">{capital} ETH</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-zinc-400">Est. Gas</span>
                  <span className="text-zinc-300">{CHAINS.find(c => c.id === selectedChain)?.gas}</span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-zinc-400">Trust Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: '87%' }} />
                    </div>
                    <span className="text-green-400 font-medium">87/100</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5">
                <p className="text-xs text-zinc-400 text-center">
                  By deploying, you agree to the <a href="#" className="text-green-400 hover:underline">Terms of Service</a> and acknowledge the risks involved in automated trading.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(2)} className="btn-secondary">Back</button>
              <motion.button
                onClick={deploy}
                disabled={isDeploying}
                className="btn-primary min-w-[200px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isDeploying ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                    Deploying...
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Deploy Agent
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
