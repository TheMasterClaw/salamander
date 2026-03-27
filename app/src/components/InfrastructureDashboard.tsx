'use client'

import { useNetworkStatus, useOracleStatus, useOraclePrices, useDexStats } from '@/hooks/useInfrastructure'

function formatNumber(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toFixed(0)}`
}

const STATUS_DOT: Record<string, string> = {
  online: 'var(--green)',
  degraded: '#d29922',
  offline: 'var(--red)',
}

export default function InfrastructureDashboard() {
  const { networks, loading: netLoading } = useNetworkStatus(15_000)
  const { oracles, loading: oraLoading } = useOracleStatus()
  const { prices: oraclePrices, loading: priceLoading } = useOraclePrices(['BTC/USD', 'ETH/USD', 'SOL/USD', 'LINK/USD', 'ARB/USD'])
  const { dexes, loading: dexLoading } = useDexStats()

  return (
    <section className="py-8" id="infrastructure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text2)' }}>
            🌐 Infrastructure Status
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: 'var(--text2)' }}>
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--green)' }} />
            Live
          </span>
        </div>
        <p className="text-xs mb-6 max-w-2xl" style={{ color: 'var(--text2)' }}>
          Real-time status of all blockchain nodes, price oracles, and DEX protocols powering Salamander agents.
        </p>

        {/* ===== RPC NODES ===== */}
        <div className="mb-6">
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--text2)' }}>
            <span>⛓️ Blockchain Nodes</span>
            <span className="text-[9px] font-normal">(Public RPCs with fallback)</span>
          </div>

          {netLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[...Array(5)].map((_, i) => <div key={i} className="skeleton-card h-28 rounded-xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {networks.map((net, i) => (
                <div key={net.chain} className="card fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: net.healthy ? 'var(--green)' : 'var(--red)' }} />
                      <span className="text-sm font-semibold">{net.chain}</span>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                      style={{ background: net.healthy ? 'rgba(63,185,80,0.12)' : 'rgba(248,81,73,0.12)', color: net.healthy ? 'var(--green)' : 'var(--red)' }}>
                      {net.healthy ? 'ONLINE' : 'DOWN'}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>Block</span>
                      <span className="font-mono" style={{ color: 'var(--text)' }}>
                        #{net.blockNumber.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>Gas</span>
                      <span className="font-mono" style={{ color: parseFloat(net.gasPrice) > 50 ? 'var(--red)' : parseFloat(net.gasPrice) > 20 ? '#d29922' : 'var(--green)' }}>
                        {net.gasPrice} gwei
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>Latency</span>
                      <span className="font-mono" style={{ color: net.latency > 1000 ? 'var(--red)' : net.latency > 500 ? '#d29922' : 'var(--green)' }}>
                        {net.latency}ms
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>Block Time</span>
                      <span className="font-mono" style={{ color: 'var(--text2)' }}>
                        ~{net.blockTime}s
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== PRICE ORACLES ===== */}
        <div className="mb-6">
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--text2)' }}>
            <span>🔮 Price Oracles</span>
            <span className="text-[9px] font-normal">(On-chain verifiable feeds)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Oracle providers */}
            <div className="card">
              <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text2)' }}>
                Oracle Providers
              </div>
              <div className="space-y-2.5">
                {oraLoading ? (
                  [...Array(4)].map((_, i) => <div key={i} className="skeleton-card h-14 rounded-lg" />)
                ) : (
                  oracles.map((oracle, i) => (
                    <div key={oracle.name} className="flex items-center justify-between p-3 rounded-lg fade-in-up"
                      style={{ background: 'var(--surface2)', animationDelay: `${i * 80}ms` }}>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{oracle.icon}</span>
                        <div>
                          <div className="text-sm font-semibold">{oracle.name}</div>
                          <div className="text-[10px]" style={{ color: 'var(--text2)' }}>{oracle.feeds} feeds</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {oracle.latency > 0 && (
                          <span className="text-[9px] font-mono" style={{ color: 'var(--text2)' }}>
                            {oracle.latency}ms
                          </span>
                        )}
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ background: STATUS_DOT[oracle.status] }} />
                          <span className="text-[10px] font-mono font-semibold"
                            style={{ color: STATUS_DOT[oracle.status] }}>
                            {oracle.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cross-validated prices */}
            <div className="card">
              <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text2)' }}>
                Cross-Validated Prices (Chainlink × Pyth)
              </div>
              {priceLoading ? (
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => <div key={i} className="skeleton-card h-12 rounded-lg" />)}
                </div>
              ) : oraclePrices.length === 0 ? (
                <div className="text-center py-6 text-xs" style={{ color: 'var(--text2)' }}>
                  Loading oracle feeds...
                </div>
              ) : (
                <div className="space-y-2">
                  {oraclePrices.map((op, i) => (
                    <div key={op.pair} className="p-2.5 rounded-lg fade-in-up"
                      style={{ background: 'var(--surface2)', animationDelay: `${i * 60}ms` }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold">{op.pair}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${op.consensus ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>
                            {op.consensus ? '✓ CONSENSUS' : `⚠ ${op.spread.toFixed(2)}% SPREAD`}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold font-mono" style={{ color: 'var(--text)' }}>
                          ${op.median.toLocaleString(undefined, { maximumFractionDigits: op.median > 100 ? 0 : 2 })}
                        </span>
                        <div className="flex gap-2">
                          {op.prices.map((p, j) => (
                            <span key={j} className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                              style={{ background: 'var(--bg)', color: 'var(--text2)' }}>
                              {p.source}: ${p.price.toLocaleString(undefined, { maximumFractionDigits: p.price > 100 ? 0 : 2 })}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ===== DEX PROTOCOLS ===== */}
        <div className="mb-6">
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--text2)' }}>
            <span>🔄 DEX Protocols</span>
            <span className="text-[9px] font-normal">(On-chain liquidity sources)</span>
          </div>

          {dexLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[...Array(6)].map((_, i) => <div key={i} className="skeleton-card h-28 rounded-xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {dexes.map((dex, i) => (
                <a key={dex.name} href={dex.url} target="_blank" rel="noopener noreferrer"
                  className="card hover:scale-[1.03] transition-transform duration-200 fade-in-up no-underline"
                  style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{dex.icon}</span>
                    <div>
                      <div className="text-xs font-semibold">{dex.name}</div>
                      <div className="text-[9px]" style={{ color: 'var(--text2)' }}>{dex.chain}</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>TVL</span>
                      <span className="font-mono font-semibold" style={{ color: 'var(--salamander)' }}>
                        {formatNumber(dex.tvl)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>24h Vol</span>
                      <span className="font-mono" style={{ color: 'var(--text)' }}>
                        {formatNumber(dex.volume24h)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span style={{ color: 'var(--text2)' }}>Pools</span>
                      <span className="font-mono" style={{ color: 'var(--text2)' }}>
                        {dex.pools.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ===== API AGGREGATORS ===== */}
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--text2)' }}>
            <span>🔌 API Integrations</span>
            <span className="text-[9px] font-normal">(Swap routing & data feeds)</span>
          </div>

          <div className="card">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: 'Kraken', type: 'CEX + WS', icon: '🐙', status: 'online', desc: 'REST + WebSocket', chains: 'N/A' },
                { name: '1inch', type: 'DEX Agg', icon: '🦄', status: 'online', desc: 'Fusion+ routing', chains: '5 chains' },
                { name: '0x / Matcha', type: 'DEX Agg', icon: '0️⃣', status: 'online', desc: 'Professional swaps', chains: '5 chains' },
                { name: 'Paraswap', type: 'DEX Agg', icon: '🔀', status: 'online', desc: 'Multi-DEX routes', chains: '5 chains' },
                { name: 'CoinGecko', type: 'Data', icon: '🦎', status: 'online', desc: 'Market data + sparklines', chains: 'All' },
                { name: 'DeFi Llama', type: 'Data', icon: '🦙', status: 'online', desc: 'Yields, TVL, protocols', chains: 'All' },
                { name: 'Binance', type: 'CEX', icon: '🟡', status: 'online', desc: 'Prices + volume', chains: 'N/A' },
                { name: 'DexScreener', type: 'Data', icon: '📊', status: 'online', desc: 'DEX pair analytics', chains: 'All' },
                { name: 'The Graph', type: 'Indexer', icon: '📈', status: 'online', desc: 'Uniswap subgraphs', chains: '5 chains' },
                { name: 'Chainlink', type: 'Oracle', icon: '🔗', status: 'online', desc: 'On-chain price feeds', chains: '5 chains' },
                { name: 'Pyth', type: 'Oracle', icon: '🐍', status: 'online', desc: 'Low-latency feeds', chains: 'Hermes' },
                { name: 'Redstone', type: 'Oracle', icon: '🔴', status: 'online', desc: 'Modular oracle', chains: 'Multi' },
              ].map((api, i) => (
                <div key={api.name} className="p-2.5 rounded-lg text-center fade-in-up"
                  style={{ background: 'var(--surface2)', animationDelay: `${i * 40}ms` }}>
                  <span className="text-lg block mb-1">{api.icon}</span>
                  <div className="text-xs font-semibold mb-0.5">{api.name}</div>
                  <div className="text-[9px] mb-1" style={{ color: 'var(--text2)' }}>{api.type}</div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: STATUS_DOT[api.status] }} />
                    <span className="text-[8px] font-mono" style={{ color: 'var(--text2)' }}>{api.chains}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary bar */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono" style={{ color: 'var(--text2)' }}>
          <span>⛓️ {networks.filter(n => n.healthy).length}/{networks.length} nodes healthy</span>
          <span>·</span>
          <span>🔮 {oracles.filter(o => o.status === 'online').length}/{oracles.length} oracles online</span>
          <span>·</span>
          <span>🔄 {dexes.length} DEXs tracked</span>
          <span>·</span>
          <span>🔌 12 API integrations</span>
          <span>·</span>
          <span>All free/public — no API keys required</span>
        </div>
      </div>
    </section>
  )
}
