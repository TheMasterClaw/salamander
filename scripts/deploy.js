const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("🦎 Deploying Salamander contracts with:", deployer.address);
  console.log("   Chain:", hre.network.name);
  console.log("   Balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "ETH");

  // 1. Deploy AgentRegistry
  const AgentRegistry = await hre.ethers.getContractFactory("AgentRegistry");
  const agentRegistry = await AgentRegistry.deploy();
  await agentRegistry.waitForDeployment();
  const agentAddr = await agentRegistry.getAddress();
  console.log("✅ AgentRegistry deployed to:", agentAddr);

  // 2. Deploy ReputationRegistry
  const ReputationRegistry = await hre.ethers.getContractFactory("ReputationRegistry");
  const reputationRegistry = await ReputationRegistry.deploy(agentAddr);
  await reputationRegistry.waitForDeployment();
  const repAddr = await reputationRegistry.getAddress();
  console.log("✅ ReputationRegistry deployed to:", repAddr);

  // 3. Deploy ValidationRegistry
  const ValidationRegistry = await hre.ethers.getContractFactory("ValidationRegistry");
  const validationRegistry = await ValidationRegistry.deploy();
  await validationRegistry.waitForDeployment();
  const valAddr = await validationRegistry.getAddress();
  console.log("✅ ValidationRegistry deployed to:", valAddr);

  // Save deployment addresses
  const fs = require("fs");
  const deployments = {
    network: hre.network.name,
    chainId: (await hre.ethers.provider.getNetwork()).chainId.toString(),
    deployer: deployer.address,
    contracts: {
      AgentRegistry: agentAddr,
      ReputationRegistry: repAddr,
      ValidationRegistry: valAddr
    },
    deployedAt: new Date().toISOString()
  };

  const dir = `./deployments/${hre.network.name}`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/addresses.json`, JSON.stringify(deployments, null, 2));
  console.log(`\n📁 Deployment saved to ${dir}/addresses.json`);
  console.log("\n🦎 Salamander is live on", hre.network.name, "!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
