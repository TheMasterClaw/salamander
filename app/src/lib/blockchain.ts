/**
 * Salamander Blockchain Node Layer
 * 
 * Direct RPC connections to EVM chains for on-chain data:
 * - Read Salamander contracts (Agent Registry, Reputation, Validation)
 * - Token balances and allowances
 * - Block/transaction data
 * - Gas prices and network status
 * 
 * Uses free public RPC endpoints — no API keys required.
 */

// ============================================================
// Chain Configuration
// ============================================================

export interface ChainConfig {
  id: number
  name: string
  rpc: string[]          // Multiple RPCs for fallback
  explorer: string
  explorerApi?: string
  nativeCurrency: { name: string; symbol: string; decimals: number }
  blockTime: number      // Average block time in seconds
  color: string
}

export const CHAINS: Record<string, ChainConfig> = {
  ethereum: {
    id: 1,
    name: 'Ethereum',
    rpc: [
      'https://eth.llamarpc.com',
      'https://rpc.ankr.com/eth',
      'https://ethereum.publicnode.com',
      'https://1rpc.io/eth',
    ],
    explorer: 'https://etherscan.io',
    explorerApi: 'https://api.etherscan.io/api',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    blockTime: 12,
    color: '#627eea',
  },
  base: {
    id: 8453,
    name: 'Base',
    rpc: [
      'https://mainnet.base.org',
      'https://base.llamarpc.com',
      'https://rpc.ankr.com/base',
      'https://1rpc.io/base',
    ],
    explorer: 'https://basescan.org',
    explorerApi: 'https://api.basescan.org/api',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    blockTime: 2,
    color: '#0052FF',
  },
  baseSepolia: {
    id: 84532,
    name: 'Base Sepolia',
    rpc: [
      'https://sepolia.base.org',
      'https://base-sepolia-rpc.publicnode.com',
    ],
    explorer: 'https://sepolia.basescan.org',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    blockTime: 2,
    color: '#0052FF',
  },
  arbitrum: {
    id: 42161,
    name: 'Arbitrum One',
    rpc: [
      'https://arb1.arbitrum.io/rpc',
      'https://arbitrum.llamarpc.com',
      'https://rpc.ankr.com/arbitrum',
      'https://1rpc.io/arb',
    ],
    explorer: 'https://arbiscan.io',
    explorerApi: 'https://api.arbiscan.io/api',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    blockTime: 0.25,
    color: '#28A0F0',
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    rpc: [
      'https://polygon-rpc.com',
      'https://polygon.llamarpc.com',
      'https://rpc.ankr.com/polygon',
      'https://1rpc.io/matic',
    ],
    explorer: 'https://polygonscan.com',
    explorerApi: 'https://api.polygonscan.com/api',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockTime: 2,
    color: '#8247E5',
  },
  optimism: {
    id: 10,
    name: 'Optimism',
    rpc: [
      'https://mainnet.optimism.io',
      'https://optimism.llamarpc.com',
      'https://rpc.ankr.com/optimism',
      'https://1rpc.io/op',
    ],
    explorer: 'https://optimistic.etherscan.io',
    explorerApi: 'https://api-optimistic.etherscan.io/api',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    blockTime: 2,
    color: '#FF0420',
  },
}

// ============================================================
// RPC Client with Fallback
// ============================================================

const rpcCache = new Map<string, { data: any; expiry: number }>()

async function rpcCall(chain: ChainConfig, method: string, params: any[] = [], cacheTtl: number = 5000): Promise<any> {
  const cacheKey = `${chain.id}:${method}:${JSON.stringify(params)}`
  const cached = rpcCache.get(cacheKey)
  if (cached && Date.now() < cached.expiry) return cached.data

  let lastError: Error | null = null

  for (const rpc of chain.rpc) {
    try {
      const res = await fetch(rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method,
          params,
        }),
      })

      if (!res.ok) continue

      const json = await res.json()
      if (json.error) {
        lastError = new Error(json.error.message)
        continue
      }

      rpcCache.set(cacheKey, { data: json.result, expiry: Date.now() + cacheTtl })
      return json.result
    } catch (e: any) {
      lastError = e
      continue
    }
  }

  throw lastError || new Error(`All RPCs failed for ${chain.name}`)
}

// ============================================================
// Basic RPC Methods
// ============================================================

export async function getBlockNumber(chain: ChainConfig): Promise<number> {
  const hex = await rpcCall(chain, 'eth_blockNumber', [], 3000)
  return parseInt(hex, 16)
}

export async function getGasPrice(chain: ChainConfig): Promise<bigint> {
  const hex = await rpcCall(chain, 'eth_gasPrice', [], 5000)
  return BigInt(hex)
}

export async function getBalance(chain: ChainConfig, address: string): Promise<bigint> {
  const hex = await rpcCall(chain, 'eth_getBalance', [address, 'latest'], 10000)
  return BigInt(hex)
}

export async function getBlock(chain: ChainConfig, blockNumber?: number): Promise<any> {
  const param = blockNumber ? `0x${blockNumber.toString(16)}` : 'latest'
  return rpcCall(chain, 'eth_getBlockByNumber', [param, false], 10000)
}

export async function callContract(chain: ChainConfig, to: string, data: string): Promise<string> {
  return rpcCall(chain, 'eth_call', [{ to, data }, 'latest'], 10000)
}

// ============================================================
// ABI Encoding Helpers (minimal, no ethers.js dependency)
// ============================================================

export function encodeFunctionCall(selector: string): string {
  return selector
}

export function encodeUint256(value: number | bigint): string {
  return BigInt(value).toString(16).padStart(64, '0')
}

export function decodeUint256(hex: string): bigint {
  if (hex === '0x' || hex === '0x0' || !hex) return 0n
  return BigInt(hex.slice(0, 66)) // First 32 bytes
}

export function decodeAddress(hex: string): string {
  if (!hex || hex.length < 42) return '0x0000000000000000000000000000000000000000'
  return '0x' + hex.slice(26, 66)
}

export function decodeBool(hex: string): boolean {
  return decodeUint256(hex) !== 0n
}

// Common function selectors
export const SELECTORS = {
  // ERC-20
  balanceOf: '0x70a08231',
  totalSupply: '0x18160ddd',
  symbol: '0x95d89b41',
  decimals: '0x313ce567',
  
  // Salamander Agent Registry
  totalAgents: '0x5c622a0e',
  getAgent: '0x2e64cec1',
  
  // Salamander Reputation
  getReputation: '0x29d42dbd',
  getWinRate: '0x3b2d081c',
  
  // Chainlink Price Feed
  latestRoundData: '0xfeaf968c',
  decimals_cl: '0x313ce567',
  description: '0x7284e416',
}

// ============================================================
// Network Status
// ============================================================

export interface NetworkStatus {
  chain: string
  chainId: number
  blockNumber: number
  gasPrice: string        // in Gwei
  gasPriceWei: bigint
  blockTime: number
  tps: number             // estimated TPS
  healthy: boolean
  latency: number         // RPC latency in ms
  color: string
}

export async function getNetworkStatus(chainKey: string): Promise<NetworkStatus> {
  const chain = CHAINS[chainKey]
  if (!chain) throw new Error(`Unknown chain: ${chainKey}`)

  const start = Date.now()

  try {
    const [blockHex, gasPriceHex] = await Promise.all([
      rpcCall(chain, 'eth_blockNumber', [], 3000),
      rpcCall(chain, 'eth_gasPrice', [], 3000),
    ])

    const latency = Date.now() - start
    const blockNumber = parseInt(blockHex, 16)
    const gasPriceWei = BigInt(gasPriceHex)
    const gasPriceGwei = Number(gasPriceWei) / 1e9

    return {
      chain: chain.name,
      chainId: chain.id,
      blockNumber,
      gasPrice: gasPriceGwei.toFixed(2),
      gasPriceWei,
      blockTime: chain.blockTime,
      tps: Math.round(1 / chain.blockTime * 150), // rough estimate
      healthy: true,
      latency,
      color: chain.color,
    }
  } catch (e) {
    return {
      chain: chain.name,
      chainId: chain.id,
      blockNumber: 0,
      gasPrice: '—',
      gasPriceWei: 0n,
      blockTime: chain.blockTime,
      tps: 0,
      healthy: false,
      latency: Date.now() - start,
      color: chain.color,
    }
  }
}

export async function getAllNetworkStatus(): Promise<NetworkStatus[]> {
  const chainKeys = ['ethereum', 'base', 'arbitrum', 'polygon', 'optimism']
  const results = await Promise.allSettled(
    chainKeys.map(key => getNetworkStatus(key))
  )
  return results
    .filter((r): r is PromiseFulfilledResult<NetworkStatus> => r.status === 'fulfilled')
    .map(r => r.value)
}

// ============================================================
// Salamander Contract Reads (Base Sepolia)
// ============================================================

const SALAMANDER_CONTRACTS = {
  AgentRegistry: '0x39b6f2bFbbE51503B5927C84e28D9c8E205a8A36',
  ReputationRegistry: '0x3edd949a48316020cF66652A62a929d334bF4b86',
  ValidationRegistry: '0x58F531bF3D13Fdd002dC40aAa6816f693C2e427B',
}

export interface OnChainAgent {
  id: number
  owner: string
  name: string
  agentType: string
  active: boolean
  trustScore: number
  winRate: number
  tradeCount: number
}

export async function getSalamanderTotalAgents(): Promise<number> {
  try {
    const result = await callContract(
      CHAINS.baseSepolia,
      SALAMANDER_CONTRACTS.AgentRegistry,
      SELECTORS.totalAgents
    )
    return Number(decodeUint256(result))
  } catch {
    return 0
  }
}

// ============================================================
// Token Balance Reading
// ============================================================

export async function getTokenBalance(
  chainKey: string,
  tokenAddress: string,
  walletAddress: string
): Promise<bigint> {
  const chain = CHAINS[chainKey]
  if (!chain) return 0n

  try {
    const data = SELECTORS.balanceOf + encodeUint256(BigInt(walletAddress))
    const result = await callContract(chain, tokenAddress, data)
    return decodeUint256(result)
  } catch {
    return 0n
  }
}

// ============================================================
// Exports
// ============================================================

export { SALAMANDER_CONTRACTS }
