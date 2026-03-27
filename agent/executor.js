/**
 * Multi-Chain Executor
 * Execute trades on any EVM chain's DEXs
 */

const { ethers } = require("ethers");
require("dotenv").config();

// Chain configs
const CHAINS = {
  ethereum: {
    rpc: process.env.ETH_RPC || "https://eth.llamarpc.com",
    chainId: 1,
    dex: "uniswap-v3",
    router: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    usdc: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  },
  base: {
    rpc: process.env.BASE_RPC || "https://mainnet.base.org",
    chainId: 8453,
    dex: "uniswap-v3",
    router: "0x2626664c2603336E57B271c5C0b26F421741e481",
    weth: "0x4200000000000000000000000000000000000006",
    usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
  },
  arbitrum: {
    rpc: process.env.ARB_RPC || "https://arb1.arbitrum.io/rpc",
    chainId: 42161,
    dex: "uniswap-v3",
    router: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
  },
  polygon: {
    rpc: process.env.POLYGON_RPC || "https://polygon-rpc.com",
    chainId: 137,
    dex: "uniswap-v3",
    router: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    weth: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    usdc: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
  },
  optimism: {
    rpc: process.env.OP_RPC || "https://mainnet.optimism.io",
    chainId: 10,
    dex: "uniswap-v3",
    router: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    weth: "0x4200000000000000000000000000000000000006",
    usdc: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"
  }
};

// Uniswap V3 SwapRouter ABI (minimal)
const SWAP_ROUTER_ABI = [
  "function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)"
];

class ChainExecutor {
  constructor(chain = "base") {
    this.chain = chain;
    this.config = CHAINS[chain];
    
    if (!this.config) {
      console.warn(`⚠️  Chain '${chain}' not configured. Using Base as default.`);
      this.chain = "base";
      this.config = CHAINS.base;
    }
    
    this.provider = new ethers.JsonRpcProvider(this.config.rpc);
    
    if (process.env.PRIVATE_KEY) {
      this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
    }
  }

  getRpcUrl() {
    return this.config.rpc;
  }

  async getOnChainPrices() {
    // Simplified price fetch — in production, use a price oracle or pool query
    try {
      return {
        chain: this.chain,
        price: null, // Would query Uniswap pool for actual price
        timestamp: Date.now()
      };
    } catch (error) {
      return { chain: this.chain, price: null, error: error.message };
    }
  }

  /**
   * Execute a DEX trade via Uniswap V3
   */
  async executeDexTrade(signal) {
    if (!this.wallet) {
      console.log("⚠️  No wallet configured. Simulating DEX trade.");
      return { success: true, simulated: true, pnlUsd: 0 };
    }

    try {
      const router = new ethers.Contract(
        this.config.router,
        SWAP_ROUTER_ABI,
        this.wallet
      );

      const tokenIn = signal.action === "buy" ? this.config.usdc : this.config.weth;
      const tokenOut = signal.action === "buy" ? this.config.weth : this.config.usdc;
      const fee = 3000; // 0.3% pool
      const slippage = parseInt(process.env.SLIPPAGE_BPS) || 50;

      const amountIn = ethers.parseUnits(signal.volume.toString(), signal.action === "buy" ? 6 : 18);
      const amountOutMin = 0; // In production, calculate with slippage

      const params = {
        tokenIn,
        tokenOut,
        fee,
        recipient: this.wallet.address,
        deadline: Math.floor(Date.now() / 1000) + 300, // 5 min
        amountIn,
        amountOutMinimum: amountOutMin,
        sqrtPriceLimitX96: 0
      };

      const tx = await router.exactInputSingle(params);
      const receipt = await tx.wait();

      return {
        success: true,
        txHash: receipt.hash,
        chain: this.chain,
        gasUsed: receipt.gasUsed.toString(),
        pnlUsd: 0
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Switch to a different chain
   */
  switchChain(newChain) {
    if (!CHAINS[newChain]) throw new Error(`Chain '${newChain}' not supported`);
    this.chain = newChain;
    this.config = CHAINS[newChain];
    this.provider = new ethers.JsonRpcProvider(this.config.rpc);
    if (process.env.PRIVATE_KEY) {
      this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
    }
    console.log(`🔄 Switched to ${newChain} (chainId: ${this.config.chainId})`);
  }

  /**
   * Get supported chains
   */
  static getSupportedChains() {
    return Object.keys(CHAINS);
  }
}

module.exports = { ChainExecutor, CHAINS };
