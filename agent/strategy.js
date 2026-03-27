/**
 * AI Strategy Engine for Salamander
 * LLM-powered signal generation + classic indicators
 */

class StrategyEngine {
  constructor(type = "momentum") {
    this.type = type;
    this.strategies = {
      momentum: this.momentumStrategy.bind(this),
      shield: this.shieldStrategy.bind(this),
      yield: this.yieldStrategy.bind(this),
      flash: this.flashStrategy.bind(this)
    };
  }

  async analyze(marketData) {
    const strategy = this.strategies[this.type];
    if (!strategy) throw new Error(`Unknown strategy: ${this.type}`);
    return strategy(marketData);
  }

  /**
   * Momentum Strategy - Trend following + breakout detection
   */
  async momentumStrategy(data) {
    const signals = [];
    
    if (!data?.kraken) return signals;
    
    const { last, high, low, volume } = data.kraken;
    
    // Simple momentum: price near high = bullish, near low = bearish
    const range = high - low;
    if (range === 0) return signals;
    
    const position = (last - low) / range; // 0 = at low, 1 = at high
    
    // Breakout detection
    if (position > 0.85) {
      signals.push({
        action: "buy",
        pair: data.kraken.pair,
        venue: "kraken",
        confidence: Math.min(position, 0.95),
        risk: 0.4,
        reason: `Bullish momentum: price at ${(position * 100).toFixed(0)}% of daily range`,
        volume: 0.001, // Conservative BTC amount
        orderType: "market"
      });
    }
    
    if (position < 0.15) {
      signals.push({
        action: "sell",
        pair: data.kraken.pair,
        venue: "kraken",
        confidence: Math.min(1 - position, 0.95),
        risk: 0.3,
        reason: `Bearish momentum: price at ${(position * 100).toFixed(0)}% of daily range`,
        volume: 0.001,
        orderType: "market"
      });
    }
    
    return signals;
  }

  /**
   * Shield Strategy - Portfolio protection + hedging
   */
  async shieldStrategy(data) {
    const signals = [];
    
    if (!data?.kraken) return signals;
    
    const { last, high, low } = data.kraken;
    const range = high - low;
    const volatility = range / last;
    
    // High volatility = hedge
    if (volatility > 0.05) {
      signals.push({
        action: "sell",
        pair: data.kraken.pair,
        venue: "kraken",
        confidence: 0.7,
        risk: 0.2,
        reason: `High volatility (${(volatility * 100).toFixed(1)}%), reducing exposure`,
        volume: 0.0005,
        orderType: "market"
      });
    }
    
    return signals;
  }

  /**
   * Yield Strategy - Arbitrage + LP optimization
   */
  async yieldStrategy(data) {
    const signals = [];
    
    // Check for CEX/DEX price discrepancy
    if (data?.kraken && data?.onchain) {
      const cexPrice = data.kraken.last;
      const dexPrice = data.onchain.price;
      
      if (cexPrice && dexPrice) {
        const spread = Math.abs(cexPrice - dexPrice) / cexPrice;
        
        if (spread > 0.005) { // > 0.5% spread
          const buyVenue = cexPrice < dexPrice ? "kraken" : "dex";
          const sellVenue = cexPrice < dexPrice ? "dex" : "kraken";
          
          signals.push({
            action: "buy",
            pair: data.kraken.pair,
            venue: buyVenue,
            confidence: 0.8,
            risk: 0.5,
            reason: `Arbitrage opportunity: ${(spread * 100).toFixed(2)}% spread between CEX/DEX`,
            volume: 0.001,
            orderType: "market",
            meta: { sellVenue, spread }
          });
        }
      }
    }
    
    return signals;
  }

  /**
   * Flash Strategy - MEV + atomic arbitrage
   */
  async flashStrategy(data) {
    // Placeholder for MEV strategies
    // Would involve mempool monitoring, flashbots, etc.
    return [];
  }
}

module.exports = { StrategyEngine };
