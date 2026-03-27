// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/**
 * @title AgentRegistry (ERC-8004 Identity Registry)
 * @notice Minimal on-chain identity for AI trading agents.
 *         Each agent mints an NFT = their portable, censorship-resistant ID.
 */
contract AgentRegistry is ERC721URIStorage {
    uint256 private _agentIds;

    struct AgentInfo {
        address owner;
        string name;
        string agentType;    // "momentum", "shield", "yield", "flash"
        string endpoint;     // Off-chain endpoint (A2A / MCP)
        uint256 registeredAt;
        bool active;
    }

    mapping(uint256 => AgentInfo) public agents;
    mapping(address => uint256[]) public ownerAgents;

    event AgentRegistered(uint256 indexed agentId, address indexed owner, string name, string agentType);
    event AgentDeactivated(uint256 indexed agentId);
    event AgentUpdated(uint256 indexed agentId, string endpoint);

    constructor() ERC721("Salamander Agent", "SLMDR") {}

    function registerAgent(
        string calldata name,
        string calldata agentType,
        string calldata endpoint,
        string calldata metadataURI
    ) external returns (uint256) {
        _agentIds++;
        uint256 newAgentId = _agentIds;

        _mint(msg.sender, newAgentId);
        _setTokenURI(newAgentId, metadataURI);

        agents[newAgentId] = AgentInfo({
            owner: msg.sender,
            name: name,
            agentType: agentType,
            endpoint: endpoint,
            registeredAt: block.timestamp,
            active: true
        });

        ownerAgents[msg.sender].push(newAgentId);

        emit AgentRegistered(newAgentId, msg.sender, name, agentType);
        return newAgentId;
    }

    function updateEndpoint(uint256 agentId, string calldata newEndpoint) external {
        require(ownerOf(agentId) == msg.sender, "Not agent owner");
        agents[agentId].endpoint = newEndpoint;
        emit AgentUpdated(agentId, newEndpoint);
    }

    function deactivateAgent(uint256 agentId) external {
        require(ownerOf(agentId) == msg.sender, "Not agent owner");
        agents[agentId].active = false;
        emit AgentDeactivated(agentId);
    }

    function getAgent(uint256 agentId) external view returns (AgentInfo memory) {
        return agents[agentId];
    }

    function getOwnerAgents(address owner) external view returns (uint256[] memory) {
        return ownerAgents[owner];
    }

    function totalAgents() external view returns (uint256) {
        return _agentIds;
    }
}
