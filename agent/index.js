/**
 * 🦎 Salamander AI Trading Agent - Core
 * 
 * Chain-agnostic autonomous trading agent with:
 * - ERC-8004 on-chain identity + reputation
 * - Kraken CEX execution
 * - Multi-chain DEX execution
 * - AI-powered strategy engine
 */

const { ethers } = require("ethers");
const { KrakenClient } = require("./kraken");
const { StrategyEngine } = require("./strategy");
const { ChainExecutor } = require("./executor");
const fs = require("fs");
require("dotenv").config();

class SalamanderAgent {
  constructor(config = {}) {
    this.name = config.name || "Salamander-Alpha";
    this.agentType = config.strategy || "momentum";
    this.chain = config.chain || process.env.DEFAULT_CHAIN || "base";
    this.maxTradeUsd = config.maxTradeUsd || parseInt(process.env.MAX_TRADE_SIZE_USD) || 100;
    this.riskTolerance = config.riskTolerance || process.env.RISK_TOLERANCE || "medium";
    
    // Components
    this.kraken = new KrakenClient();
    this.strategy = new StrategyEngine(this.agentType);
    this.executor = new ChainExecutor(this.chain);
    
    // State
    this.agentId = null;
    this.running = false;
    this.trades = [];
    this.pnl = 0;
    
    console.log(`🦎 ${this.name} initialized`);
    console.log(`   Strategy: ${this.agentType}`);
    console.log(`   Chain: ${this.chain}`);
    console.log(`   Max trade: $${this.maxTradeUsd}`);
    console.log(`   Risk: ${this.riskTolerance}`);
  }

  /**
   * Register agent on-chain via ERC-8004
   */
  async register(registryAddress) {
    console.log("📝 Registering agent on-chain...");
    
    const provider = new ethers.JsonRpcProvider(this.executor.getRpcUrl());
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
    const abi = JSON.parse(
      fs.readFileSync("./artifacts/contracts/AgentRegistry.sol/AgentRegistry.json")
    ).abi;
    
    const registry = new ethers.Contract(registryAddress, abi, wallet);
    
    const metadata = {
      name: this.name,
      description: `Salamander ${this.agentType} trading agent`,
      strategy: this.agentType,
      chains: [this.chain],
      riskLevel: this.riskTolerance,
      createdAt: new Date().toISOString()
    };
    
    // TODO: Upload metadata to IPFS and use the CID as metadataURI
    const metadataURI = `data:application/json;base64,${Buffer.from(JSON.stringify(metadata)).toString("base64")}`;
    
    const tx = await registry.registerAgent(
      this.name,
      this.agentType,
      `http://localhost:3001/agent/${this.name}`,
      metadataURI
    );
    
    const receipt = await tx.wait();
    const event = receipt.logs.find(log => {
      try {
        return registry.interface.parseLog(log)?.name === "AgentRegistered";
      } catch { return false; }
    });
    
    if (event) {
      const parsed = registry.interface.parseLog(event);
      this.agentId = parsed.args.agentId.toString();
      console.log(`✅ Agent registered with ID: ${this.agentId}`);
    }
    
    return this.agentId;
  }

  /**
   * Main trading loop
   */
  async start() {
    this.running = true;
    console.log(`\n🚀 ${this.name} is now LIVE\n`);
    
    while (this.running) {
      try {
        // 1. Get market data
        const marketData = await this.getMarketData();
        
        // 2. AI generates trading signals
        const signals = await this.strategy.analyze(marketData);
        
        // 3. Filter by risk tolerance
        const filtered = this.filterByRisk(signals);
        
        // 4. Execute trades
        for (const signal of filtered) {
          await this.executeTrade(signal);
        }
        
        // 5. Log status
        this.logStatus();
        
        // 6. Wait before next cycle
        await this.sleep(30000); // 30 seconds
        
      } catch (error) {
        console.error("❌ Agent error:", error.message);
        await this.sleep(60000); // Wait 1 min on error
      }
    }
  }

  async getMarketData() {
    // Fetch from Kraken + on-chain sources
    const krakenData = await this.kraken.getTicker("BTCUSD");
    const chainData = await this.executor.getOnChainPrices();
    
    return {
      timestamp: Date.now(),
      kraken: krakenData,
      onchain: chainData,
      chain: this.chain
    };
  }

  filterByRisk(signals) {
    const maxRisk = {
      low: 0.3,
      medium: 0.6,
      high: 0.9
    }[this.riskTolerance];
    
    return signals.filter(s => s.confidence >= 0.5 && s.risk <= maxRisk);
  }

  async executeTrade(signal) {
    console.log(`\n⚡ Executing: ${signal.action} ${signal.pair} on ${signal.venue}`);
    
    let result;
    if (signal.venue === "kraken") {
      result = await this.kraken.placeOrder(signal);
    } else {
      result = await this.executor.executeDexTrade(signal);
    }
    
    this.trades.push({
      ...signal,
      result,
      timestamp: Date.now()
    });
    
    if (result.success) {
      this.pnl += result.pnlUsd || 0;
      console.log(`   ✅ Trade executed. PnL: $${result.pnlUsd || 0}`);
    } else {
      console.log(`   ❌ Trade failed: ${result.error}`);
    }
    
    return result;
  }

  logStatus() {
    console.log(`\n📊 ${this.name} | Trades: ${this.trades.length} | PnL: $${this.pnl.toFixed(2)} | Chain: ${this.chain}`);
  }

  stop() {
    this.running = false;
    console.log(`\n🛑 ${this.name} stopped.`);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI Entry
if (require.main === module) {
  const args = process.argv.slice(2);
  const config = {};
  
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace("--", "");
    config[key] = args[i + 1];
  }
  
  const agent = new SalamanderAgent(config);
  
  // Handle graceful shutdown
  process.on("SIGINT", () => {
    agent.stop();
    process.exit(0);
  });
  
  agent.start();
}

module.exports = { SalamanderAgent };
