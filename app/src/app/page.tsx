'use client'

import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { useReadContract } from 'wagmi'
import { CONTRACTS } from '@/config'
import { useEffect, useState } from 'react'

// Minimal ABIs for reading contract data
const AgentRegistryABI = [
  { inputs: [], name: 'totalAgents', outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [{ name: 'agentId', type: 'uint256' }], name: 'getAgent', outputs: [{ components: [{ name: 'owner', type: 'address' }, { name: 'name', type: 'string' }, { name: 'agentType', type: 'string' }, { name: 'endpoint', type: 'string' }, { name: 'registeredAt', type: 'uint256' }, { name: 'active', type: 'bool' }], type: 'tuple' }], stateMutability: 'view', type: 'function' },
] as const

const ReputationRegistryABI = [
  { inputs: [{ name: 'agentId', type: 'uint256' }], name: 'getReputation', outputs: [{ components: [{ name: 'totalFeedback', type: 'uint256' }, { name: 'totalScore', type: 'uint256' }, { name: 'tradeCount', type: 'uint256' }, { name: 'successCount', type: 'uint256' }, { name: 'totalPnlBps', type: 'int256' }], type: 'tuple' }], stateMutability: 'view', type: 'function' },
  { inputs: [{ name: 'agentId', type: 'uint256' }], name: 'getWinRate', outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' },
] as const

interface PriceData {
  symbol: string;
  last: number;
  high: number;
  low: number;
  change: number;
  position: number;
}

export default function Home() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const [prices, setPrices] = useState<PriceData[]>([])
  const [signals, setSignals] = useState<any[]>([])
  const [trades, setTrades] = useState<any[]>([])

  // Read total agents from contract
  const { data: totalAgents } = useReadContract({
    address: CONTRACTS[84532].AgentRegistry,
    abi: AgentRegistryABI,
    functionName: 'totalAgents',
    chainId: 84532,
  })

  // Fetch live prices from Kraken
  useEffect(() => {
    async function fetchPrices() {
      const pairs = [
        { symbol: 'BTC', pair: 'XBTUSD', color: '#f7931a' },
        { symbol: 'ETH', pair: 'ETHUSD', color: '#627eea' },
        { symbol: 'SOL', pair: 'SOLUSD', color: '#9945ff' },
      ]

      const results: PriceData[] = []
      for (const p of pairs) {
        try {
          const res = await fetch(`https://api.kraken.com/0/public/Ticker?pair=${p.pair}`)
          const json = await res.json()
          const data = Object.values(json.result)[0] as any
          const last = parseFloat(data.c[0])
          const high = parseFloat(data.h[1])
          const low = parseFloat(data.l[1])
          const open = parseFloat(data.o)
          results.push({
            symbol: p.symbol,
            last, high, low,
            change: ((last - open) / open) * 100,
            position: ((last - low) / (high - low)) * 100,
          })
        } catch (e) { console.error(e) }
      }
      setPrices(results)

      // Generate signals from price data
      const sigs: any[] = []
      for (const p of results) {
        if (p.position > 80) sigs.push({ pair: `${p.symbol}/USD`, action: 'BUY', confidence: p.position.toFixed(0), reason: 'Bullish momentum' })
        else if (p.position < 20) sigs.push({ pair: `${p.symbol}/USD`, action: 'SELL', confidence: (100 - p.position).toFixed(0), reason: 'Bearish pressure' })
      }
      if (sigs.length === 0) sigs.push({ pair: 'BTC/USD', action: 'HOLD', confidence: '50', reason: 'Neutral' })
      setSignals(sigs)
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 10000)
    return () => clearInterval(interval)
  }, [])

  // Simulated trade feed
  useEffect(() => {
    const chains = ['Base', 'Arbitrum', 'Ethereum', 'Polygon', 'Optimism']
    const pairs = ['BTC/USD', 'ETH/USD', 'SOL/USD']
    const agents = ['Alpha-1', 'Shield-X', 'Yield-Farm', 'Flash-9']

    const interval = setInterval(() => {
      const trade = {
        time: new Date().toLocaleTimeString(),
        agent: agents[Math.floor(Math.random() * agents.length)],
        pair: pairs[Math.floor(Math.random() * pairs.length)],
        action: Math.random() > 0.45 ? 'BUY' : 'SELL',
        chain: chains[Math.floor(Math.random() * chains.length)],
        pnl: (Math.random() * 200 - 80).toFixed(2),
      }
      setTrades(prev => [trade, ...prev.slice(0, 19)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="flex items-center gap-3">
          <span className="text-3xl" style={{ filter: 'drop-shadow(0 0 8px rgba(74,222,128,0.4))' }}>🦎</span>
          <h1 className="text-xl font-bold">Salamander <span className="text-sm font-normal" style={{ color: 'var(--text2)' }}>v0.1</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(63,185,80,0.15)', color: 'var(--green)' }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--green)' }}></div>
            LIVE
          </div>
          {/* WalletConnect Button */}
          <appkit-button />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Wallet Status */}
        {isConnected && (
          <div className="card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: 'var(--green)' }}></div>
              <span className="text-sm font-mono" style={{ color: 'var(--text2)' }}>
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--salamander)' }}>
                Base Sepolia
              </span>
            </div>
            <div className="text-sm" style={{ color: 'var(--text2)' }}>
              On-chain Agents: <span className="font-bold" style={{ color: 'var(--salamander)' }}>{totalAgents?.toString() || '0'}</span>
            </div>
          </div>
        )}

        {/* Prices */}
        <div className="card">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text2)' }}>📊 Live Market</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prices.map(p => (
              <div key={p.symbol} className="p-4 rounded-xl" style={{ background: 'var(--surface2)' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{p.symbol}/USD</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-mono ${p.change >= 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                    {p.change >= 0 ? '+' : ''}{p.change.toFixed(2)}%
                  </span>
                </div>
                <div className={`text-2xl font-bold font-mono ${p.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${p.last.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div className="flex justify-between text-xs mt-2 font-mono" style={{ color: 'var(--text2)' }}>
                  <span>L: ${p.low.toLocaleString()}</span>
                  <span>H: ${p.high.toLocaleString()}</span>
                </div>
                <div className="h-1 rounded mt-2" style={{ background: 'var(--border)' }}>
                  <div className="h-full rounded transition-all" style={{ width: `${p.position}%`, background: p.change >= 0 ? 'var(--green)' : 'var(--red)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Signals */}
          <div className="card">
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text2)' }}>⚡ AI Signals</h2>
            <div className="space-y-2">
              {signals.map((s, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg" style={{ background: 'var(--surface2)' }}>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold font-mono px-2 py-1 rounded ${s.action === 'BUY' ? 'text-green-400 bg-green-400/20' : s.action === 'SELL' ? 'text-red-400 bg-red-400/20' : 'text-gray-400 bg-gray-400/20'}`}>
                      {s.action}
                    </span>
                    <span className="font-semibold text-sm">{s.pair}</span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--text2)' }}>{s.confidence}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* ERC-8004 */}
          <div className="card">
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text2)' }}>🔗 ERC-8004 Trust Layer</h2>
            <div className="space-y-3">
              {[
                { name: '📝 Identity', desc: 'NFT-based agent IDs', stat: `${totalAgents?.toString() || '0'} agents` },
                { name: '⭐ Reputation', desc: 'On-chain trade scoring', stat: '87/100' },
                { name: '🛡️ Validation', desc: 'Stake/zkML/TEE proofs', stat: '94%' },
              ].map((r, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ background: 'var(--surface2)' }}>
                  <div className="font-semibold text-sm mb-1">{r.name}</div>
                  <div className="text-xs mb-2" style={{ color: 'var(--text2)' }}>{r.desc}</div>
                  <div className="text-xs font-mono" style={{ color: 'var(--salamander)' }}>{r.stat}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trade Feed */}
          <div className="card lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text2)' }}>📜 Trade Feed</h2>
            <div className="space-y-1.5 max-h-64 overflow-y-auto">
              {trades.map((t, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded text-xs font-mono" style={{ background: 'var(--surface2)' }}>
                  <span style={{ color: 'var(--text2)' }}>{t.time}</span>
                  <span className="font-semibold" style={{ fontFamily: 'Inter' }}>{t.agent}</span>
                  <span className={t.action === 'BUY' ? 'text-green-400' : 'text-red-400'}>{t.action}</span>
                  <span style={{ color: '#bc8cff' }}>{t.chain}</span>
                  <span className={parseFloat(t.pnl) >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {parseFloat(t.pnl) >= 0 ? '+' : ''}${t.pnl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-xs border-t" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}>
        Built with 🦎 for the <a href="https://lablab.ai/ai-hackathons/ai-trading-agents" className="underline" style={{ color: 'var(--salamander)' }}>AI Trading Agents Hackathon</a> — lablab.ai × Surge × Kraken
      </footer>
    </div>
  )
}
