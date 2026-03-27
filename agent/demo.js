/**
 * 🦎 Salamander Demo - Live Market Analysis
 */

const { KrakenClient } = require("./kraken");
const { StrategyEngine } = require("./strategy");
const { ChainExecutor } = require("./executor");

async function demo() {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🦎  S A L A M A N D E R                                    ║
║   Trustless AI Trading Agents — Any Chain, Any Strategy       ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   ERC-8004 Identity  ·  Kraken CEX  ·  Multi-Chain DEX       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
  `);

  // 1. Show supported chains
  const chains = ChainExecutor.getSupportedChains();
  console.log("🔗 Supported Chains:");
  chains.forEach(c => console.log(`   • ${c}`));
  console.log();

  // 2. Fetch live market data from Kraken
  const kraken = new KrakenClient();
  
  const pairs = ["XBTUSD", "ETHUSD", "SOLUSD"];
  console.log("📊 Live Market Data (Kraken):");
  console.log("─".repeat(60));
  
  for (const pair of pairs) {
    const ticker = await kraken.getTicker(pair);
    if (ticker) {
      const change = ((ticker.last - ticker.low) / ticker.low * 100).toFixed(2);
      const symbol = pair.replace("USD", "");
      console.log(`   ${symbol.padEnd(6)} $${ticker.last.toLocaleString().padEnd(12)} H: $${ticker.high.toLocaleString().padEnd(12)} L: $${ticker.low.toLocaleString().padEnd(12)} Vol: ${ticker.volume.toFixed(0)}`);
    }
  }
  console.log("─".repeat(60));
  console.log();

  // 3. Run all 4 strategies against BTC
  console.log("🤖 AI Strategy Analysis (BTC):");
  console.log("─".repeat(60));
  
  const btcData = await kraken.getTicker("XBTUSD");
  const strategies = ["momentum", "shield", "yield", "flash"];
  
  for (const stratType of strategies) {
    const engine = new StrategyEngine(stratType);
    const signals = await engine.analyze({
      kraken: btcData,
      onchain: { price: btcData ? btcData.last * 1.002 : null } // Simulate slight DEX premium
    });
    
    const icon = { momentum: "🏃", shield: "🛡️", yield: "🌾", flash: "⚡" }[stratType];
    
    if (signals.length > 0) {
      for (const sig of signals) {
        console.log(`   ${icon} ${stratType.padEnd(10)} → ${sig.action.toUpperCase().padEnd(5)} | Confidence: ${(sig.confidence * 100).toFixed(0)}% | Risk: ${(sig.risk * 100).toFixed(0)}%`);
        console.log(`${"".padEnd(25)}${sig.reason}`);
      }
    } else {
      console.log(`   ${icon} ${stratType.padEnd(10)} → NO SIGNAL (waiting for opportunity)`);
    }
  }
  console.log("─".repeat(60));
  console.log();

  // 4. Show OHLC data
  console.log("📈 BTC 1H Candles (last 5):");
  console.log("─".repeat(60));
  const ohlc = await kraken.getOHLC("XBTUSD", 60);
  if (ohlc.length > 0) {
    const last5 = ohlc.slice(-5);
    for (const candle of last5) {
      const time = new Date(candle.time * 1000).toLocaleTimeString();
      const direction = candle.close >= candle.open ? "🟢" : "🔴";
      console.log(`   ${direction} ${time.padEnd(12)} O: $${candle.open.toLocaleString().padEnd(10)} H: $${candle.high.toLocaleString().padEnd(10)} L: $${candle.low.toLocaleString().padEnd(10)} C: $${candle.close.toLocaleString()}`);
    }
  }
  console.log("─".repeat(60));
  console.log();

  // 5. ERC-8004 contract info
  console.log("📝 ERC-8004 Contracts:");
  console.log("─".repeat(60));
  console.log("   AgentRegistry.sol       — NFT-based agent identity");
  console.log("   ReputationRegistry.sol  — On-chain trade tracking + scoring");
  console.log("   ValidationRegistry.sol  — Stake/zkML/TEE validation");
  console.log("─".repeat(60));
  console.log();

  console.log("🦎 Salamander is ready. Deploy to any chain and start trading.\n");
}

demo().catch(console.error);
