# 🦎 Salamander

**Trustless AI Trading Agents — Any Chain, Any DEX, Any Strategy.**

Salamander is a chain-agnostic AI trading agent platform built on [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) (Trustless Agents). Agents register on-chain, build reputation through verified trades, and execute strategies across any EVM chain + Kraken CEX.

## Why Salamander?

Salamanders adapt to any environment. So do our agents.

- 🔗 **Any Chain** — Deploy on Base, Arbitrum, Ethereum, Polygon, or any EVM chain
- 🤖 **AI-Powered** — LLM-driven strategy generation, risk assessment, and execution
- 🛡️ **Trustless** — ERC-8004 identity + reputation = no blind trust required
- 📊 **Real Execution** — Kraken CLI for CEX + DEX aggregation for on-chain trades
- 🔄 **Autonomous** — Set it and forget it. Agents trade, learn, and adapt.

## Architecture

```
┌─────────────────────────────────────────────────┐
│                  SALAMANDER                       │
├──────────────┬──────────────┬───────────────────┤
│  AI Engine   │  ERC-8004    │  Execution Layer  │
│              │  Trust Layer │                   │
│  • Strategy  │  • Identity  │  • Kraken CLI     │
│  • Risk Mgmt │  • Reputation│  • Uniswap/DEXs   │
│  • Signals   │  • Validation│  • Multi-chain    │
│  • Learning  │  • Registry  │  • Order routing  │
└──────────────┴──────────────┴───────────────────┘
```

## Agent Types

| Agent | Strategy | Risk Level |
|-------|----------|------------|
| 🏃 **Momentum** | Trend following, breakout detection | Medium |
| 🛡️ **Shield** | Hedging, stop-loss, portfolio protection | Low |
| 🌾 **Yield** | LP optimization, yield farming, arbitrage | Medium-High |
| ⚡ **Flash** | MEV, atomic arbitrage, liquidations | High |

## Quick Start

```bash
# Install dependencies
npm install

# Deploy ERC-8004 registries (any chain)
npx hardhat deploy --network base

# Start an AI trading agent
npm run agent -- --strategy momentum --chain base

# Monitor agents
npm run dashboard
```

## Tech Stack

- **Smart Contracts:** Solidity + Hardhat (ERC-8004 registries)
- **AI Engine:** Python (LLM integration + strategy engine)
- **Execution:** Kraken CLI + ethers.js (multi-chain)
- **Frontend:** Next.js + wagmi (agent dashboard)

## Hackathon

Built for the [AI Trading Agents Hackathon](https://lablab.ai/ai-hackathons/ai-trading-agents) on lablab.ai × Surge × Kraken.

- 📅 March 30 – April 12, 2026
- 💰 $55,000 prize pool
- 🔑 Build-in-public at early.surge.xyz

## License

MIT
