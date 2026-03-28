'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet,
  Settings,
  ChevronDown,
  Info
} from 'lucide-react'
import { useMarketData } from '@/hooks/useMarketData'

interface OrderBookEntry {
  price: number
  amount: number
  total: number
}

const MOCK_ORDER_BOOK = {
  bids: Array.from({ length: 20 }, (_, i) => ({
    price: 67500 - i * 10,
    amount: Math.random() * 2 + 0.1,
    total: 0
  })).map((b, i, arr) => ({
    ...b,
    total: arr.slice(0, i + 1).reduce((s, x) => s + x.amount, 0)
  })),
  asks: Array.from({ length: 20 }, (_, i) => ({
    price: 67510 + i * 10,
    amount: Math.random() * 2 + 0.1,
    total: 0
  })).map((a, i, arr) => ({
    ...a,
    total: arr.slice(0, i + 1).reduce((s, x) => s + x.amount, 0)
  })).reverse()
}

export default function TradePanel() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy')
  const [orderType, setOrderType] = useState<'market' | 'limit' | 'stop'>('limit')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('67500')
  const [leverage, setLeverage] = useState(1)
  
  const { prices } = useMarketData({ symbols: ['BTC'] })
  const btcPrice = prices.find(p => p.symbol === 'BTC')?.price || 67500
  
  const maxAmount = 2.5
  const total = parseFloat(amount || '0') * parseFloat(price || '0')
  
  const placeOrder = () => {
    console.log('Placing order:', { type: activeTab, orderType, amount, price, total })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Order Book */}
      <div className="lg:col-span-1 card-glass">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-zinc-300">Order Book</span>
          <div className="flex gap-1">
            {['0.01', '0.1', '1'].map((p) => (
              <button key={p} className="px-2 py-1 text-[10px] rounded bg-white/5 text-zinc-400 hover:text-white transition-colors">
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="grid grid-cols-3 gap-2 text-[10px] text-zinc-500 mb-2 px-2">
          <span>Price (USD)</span>
          <span className="text-right">Amount (BTC)</span>
          <span className="text-right">Total</span>
        </div>

        {/* Asks (Sells) */}
        <div className="space-y-[2px] mb-2">
          {MOCK_ORDER_BOOK.asks.map((ask, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 text-xs py-1 px-2 rounded hover:bg-white/5 cursor-pointer relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-red-500/10" 
                style={{ width: `${(ask.total / 20) * 100}%`, right: 0, left: 'auto' }}
              />
              <span className="relative text-red-400 font-mono">{ask.price.toLocaleString()}</span>
              <span className="relative text-zinc-300 font-mono text-right">{ask.amount.toFixed(4)}</span>
              <span className="relative text-zinc-400 font-mono text-right">{ask.total.toFixed(4)}</span>
            </div>
          ))}
        </div>

        {/* Spread */}
        <div className="flex items-center justify-center gap-4 py-2 border-y border-white/5">
          <span className="text-lg font-bold text-white font-mono">${btcPrice.toLocaleString()}</span>
          <span className="text-xs text-green-400">+2.34%</span>
        </div>

        {/* Bids (Buys) */}
        <div className="space-y-[2px] mt-2">
          {MOCK_ORDER_BOOK.bids.map((bid, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 text-xs py-1 px-2 rounded hover:bg-white/5 cursor-pointer relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-green-500/10" 
                style={{ width: `${(bid.total / 20) * 100}%`, right: 0, left: 'auto' }}
              />
              
              <span className="relative text-green-400 font-mono">{bid.price.toLocaleString()}</span>
              <span className="relative text-zinc-300 font-mono text-right">{bid.amount.toFixed(4)}</span>
              <span className="relative text-zinc-400 font-mono text-right">{bid.total.toFixed(4)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Entry */}
      <div className="lg:col-span-2 card-glass">
        {/* Buy/Sell Tabs */}
        <div className="flex gap-2 mb-6">
          <motion.button
            onClick={() => setActiveTab('buy')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'buy' 
                ? 'bg-green-500 text-black' 
                : 'bg-white/5 text-zinc-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <ArrowUpRight size={18} />
            Buy / Long
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab('sell')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'sell' 
                ? 'bg-red-500 text-white' 
                : 'bg-white/5 text-zinc-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <ArrowDownRight size={18} />
            Sell / Short
          </motion.button>
        </div>

        {/* Order Type */}
        <div className="flex gap-2 mb-6">
          {(['market', 'limit', 'stop'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                orderType === type
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Price Input */}
        {orderType !== 'market' && (
          <div className="mb-4">
            <label className="text-xs text-zinc-400 mb-2 block">Price (USD)</label>
            <div className="relative">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-lg focus:outline-none focus:border-green-500/50 transition-colors"
                placeholder="0.00"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">USD</span>
            </div>
          </div>
        )}

        {/* Amount Input */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-zinc-400">Amount (BTC)</label>
            <span className="text-xs text-zinc-500">Balance: 2.5 BTC</span>
          </div>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-lg focus:outline-none focus:border-green-500/50 transition-colors"
              placeholder="0.00"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">BTC</span>
          </div>
          
          {/* Quick Amount Buttons */}
          <div className="flex gap-2 mt-2">
            {['25%', '50%', '75%', '100%'].map((pct) => (
              <button
                key={pct}
                onClick={() => setAmount((maxAmount * parseInt(pct) / 100).toFixed(4))}
                className="flex-1 py-1.5 text-[10px] rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                {pct}
              </button>
            ))}
          </div>
        </div>

        {/* Leverage */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-zinc-400">Leverage</label>
            <span className="text-xs font-mono text-green-400">{leverage}x</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={leverage}
            onChange={(e) => setLeverage(parseInt(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
            <span>1x</span>
            <span>25x</span>
            <span>50x</span>
            <span>75x</span>
            <span>100x</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white/5 rounded-xl p-4 mb-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Position Size</span>
            <span className="text-white font-mono">${total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Margin Required</span>
            <span className="text-white font-mono">${(total / leverage).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Est. Fee</span>
            <span className="text-zinc-300 font-mono">${(total * 0.001).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm pt-2 border-t border-white/10">
            <span className="text-zinc-400">Liquidation Price</span>
            <span className="text-red-400 font-mono">
              ${activeTab === 'buy' 
                ? (btcPrice * (1 - 0.9 / leverage)).toFixed(2) 
                : (btcPrice * (1 + 0.9 / leverage)).toFixed(2)
              }
            </span>
          </div>
        </div>

        {/* Place Order Button */}
        <motion.button
          onClick={placeOrder}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            activeTab === 'buy'
              ? 'bg-green-500 text-black hover:bg-green-400 shadow-lg shadow-green-500/25'
              : 'bg-red-500 text-white hover:bg-red-400 shadow-lg shadow-red-500/25'
          }`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {activeTab === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
        </motion.button>
      </div>
    </div>
  )
}
