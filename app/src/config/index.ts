import { baseSepolia, base, arbitrum, polygon, optimism, mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// WalletConnect Project ID
export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || '73e63e0d9a36419a0d08ce41c44e68bf'

export const networks = [baseSepolia, base, mainnet, arbitrum, polygon, optimism]

export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks,
})

// Salamander contract addresses (Base Sepolia)
export const CONTRACTS = {
  84532: { // Base Sepolia
    AgentRegistry: '0x39b6f2bFbbE51503B5927C84e28D9c8E205a8A36' as `0x${string}`,
    ReputationRegistry: '0x3edd949a48316020cF66652A62a929d334bF4b86' as `0x${string}`,
    ValidationRegistry: '0x58F531bF3D13Fdd002dC40aAa6816f693C2e427B' as `0x${string}`,
  }
}
