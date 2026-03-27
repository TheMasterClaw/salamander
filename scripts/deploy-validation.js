const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const nonce = await deployer.getNonce();
  console.log("Nonce:", nonce);
  
  const V = await hre.ethers.getContractFactory("ValidationRegistry");
  const v = await V.deploy({ nonce });
  await v.waitForDeployment();
  const addr = await v.getAddress();
  console.log("✅ ValidationRegistry:", addr);

  // Save all addresses
  const fs = require("fs");
  const deployments = {
    network: "baseSepolia",
    chainId: "84532",
    contracts: {
      AgentRegistry: "0x39b6f2bFbbE51503B5927C84e28D9c8E205a8A36",
      ReputationRegistry: "0x3edd949a48316020cF66652A62a929d334bF4b86",
      ValidationRegistry: addr
    },
    deployedAt: new Date().toISOString()
  };
  fs.mkdirSync("./deployments/baseSepolia", { recursive: true });
  fs.writeFileSync("./deployments/baseSepolia/addresses.json", JSON.stringify(deployments, null, 2));
  console.log("📁 Saved to deployments/baseSepolia/addresses.json");
}

main().catch(console.error);
