require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000001";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  },
  networks: {
    // Mainnets
    ethereum: {
      url: process.env.ETH_RPC || "https://eth.llamarpc.com",
      accounts: [PRIVATE_KEY]
    },
    base: {
      url: process.env.BASE_RPC || "https://mainnet.base.org",
      accounts: [PRIVATE_KEY]
    },
    arbitrum: {
      url: process.env.ARB_RPC || "https://arb1.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY]
    },
    polygon: {
      url: process.env.POLYGON_RPC || "https://polygon-rpc.com",
      accounts: [PRIVATE_KEY]
    },
    optimism: {
      url: process.env.OP_RPC || "https://mainnet.optimism.io",
      accounts: [PRIVATE_KEY]
    },
    // Testnets
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC || "https://sepolia.base.org",
      accounts: [PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC || "https://rpc.sepolia.org",
      accounts: [PRIVATE_KEY]
    }
  }
};
