/**
 * Kraken CLI Integration
 * CEX execution layer for Salamander agents
 */

const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config();

class KrakenClient {
  constructor() {
    this.apiKey = process.env.KRAKEN_API_KEY;
    this.apiSecret = process.env.KRAKEN_API_SECRET;
    this.baseUrl = "https://api.kraken.com";
    this.version = "0";
  }

  /**
   * Get ticker info for a pair
   */
  async getTicker(pair = "XBTUSD") {
    try {
      const response = await axios.get(`${this.baseUrl}/${this.version}/public/Ticker`, {
        params: { pair }
      });
      
      if (response.data.error?.length > 0) {
        throw new Error(response.data.error[0]);
      }
      
      const data = Object.values(response.data.result)[0];
      return {
        pair,
        ask: parseFloat(data.a[0]),
        bid: parseFloat(data.b[0]),
        last: parseFloat(data.c[0]),
        volume: parseFloat(data.v[1]),
        high: parseFloat(data.h[1]),
        low: parseFloat(data.l[1]),
        timestamp: Date.now()
      };
    } catch (error) {
      console.error("Kraken getTicker error:", error.message);
      return null;
    }
  }

  /**
   * Get OHLC data for strategy analysis
   */
  async getOHLC(pair = "XBTUSD", interval = 60) {
    try {
      const response = await axios.get(`${this.baseUrl}/${this.version}/public/OHLC`, {
        params: { pair, interval }
      });
      
      if (response.data.error?.length > 0) {
        throw new Error(response.data.error[0]);
      }
      
      const key = Object.keys(response.data.result).find(k => k !== "last");
      return response.data.result[key].map(candle => ({
        time: candle[0],
        open: parseFloat(candle[1]),
        high: parseFloat(candle[2]),
        low: parseFloat(candle[3]),
        close: parseFloat(candle[4]),
        volume: parseFloat(candle[6])
      }));
    } catch (error) {
      console.error("Kraken getOHLC error:", error.message);
      return [];
    }
  }

  /**
   * Place an order (requires API key)
   */
  async placeOrder(signal) {
    if (!this.apiKey || !this.apiSecret) {
      console.log("⚠️  Kraken API keys not configured. Simulating trade.");
      return {
        success: true,
        simulated: true,
        orderId: `sim_${Date.now()}`,
        pnlUsd: 0
      };
    }

    const path = `/${this.version}/private/AddOrder`;
    const nonce = Date.now() * 1000;
    
    const body = {
      nonce,
      ordertype: signal.orderType || "market",
      type: signal.action, // "buy" or "sell"
      volume: signal.volume.toString(),
      pair: signal.pair
    };

    if (signal.price) body.price = signal.price.toString();

    try {
      const signature = this.signRequest(path, nonce, body);
      
      const response = await axios.post(`${this.baseUrl}${path}`, 
        new URLSearchParams(body).toString(),
        {
          headers: {
            "API-Key": this.apiKey,
            "API-Sign": signature,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );

      if (response.data.error?.length > 0) {
        return { success: false, error: response.data.error[0] };
      }

      return {
        success: true,
        orderId: response.data.result.txid[0],
        description: response.data.result.descr.order,
        pnlUsd: 0
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Get account balance
   */
  async getBalance() {
    if (!this.apiKey) return { simulated: true, USD: 10000 };
    
    const path = `/${this.version}/private/Balance`;
    const nonce = Date.now() * 1000;
    const body = { nonce };
    const signature = this.signRequest(path, nonce, body);
    
    try {
      const response = await axios.post(`${this.baseUrl}${path}`,
        new URLSearchParams(body).toString(),
        {
          headers: {
            "API-Key": this.apiKey,
            "API-Sign": signature,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      return response.data.result;
    } catch (error) {
      return { error: error.message };
    }
  }

  signRequest(path, nonce, body) {
    const message = new URLSearchParams({ ...body, nonce }).toString();
    const hash = crypto.createHash("sha256")
      .update(nonce + message)
      .digest();
    
    const hmac = crypto.createHmac("sha512", Buffer.from(this.apiSecret, "base64"))
      .update(path)
      .update(hash)
      .digest("base64");
    
    return hmac;
  }
}

module.exports = { KrakenClient };
