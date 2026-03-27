// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title ReputationRegistry (ERC-8004 Reputation Registry)
 * @notice On-chain feedback signals for AI trading agents.
 *         Tracks trade outcomes, scores, and peer reviews.
 */
contract ReputationRegistry {

    struct Feedback {
        address reviewer;
        uint256 agentId;
        uint8 score;          // 1-100
        string category;      // "accuracy", "speed", "profit", "safety"
        string comment;
        uint256 tradeRef;     // Reference to a specific trade (optional)
        uint256 timestamp;
    }

    struct AgentReputation {
        uint256 totalFeedback;
        uint256 totalScore;
        uint256 tradeCount;
        uint256 successCount;
        int256 totalPnlBps;   // Cumulative PnL in basis points
    }

    address public agentRegistry;

    mapping(uint256 => AgentReputation) public reputations;
    mapping(uint256 => Feedback[]) public feedbackHistory;

    // Trade tracking
    struct TradeRecord {
        uint256 agentId;
        string chain;
        string pair;
        bool isBuy;
        uint256 amountUsd;
        int256 pnlBps;
        uint256 executedAt;
        bytes32 txHash;
    }

    mapping(uint256 => TradeRecord[]) public tradeHistory;

    event FeedbackSubmitted(uint256 indexed agentId, address indexed reviewer, uint8 score, string category);
    event TradeRecorded(uint256 indexed agentId, string chain, string pair, int256 pnlBps);

    constructor(address _agentRegistry) {
        agentRegistry = _agentRegistry;
    }

    function submitFeedback(
        uint256 agentId,
        uint8 score,
        string calldata category,
        string calldata comment,
        uint256 tradeRef
    ) external {
        require(score >= 1 && score <= 100, "Score must be 1-100");

        feedbackHistory[agentId].push(Feedback({
            reviewer: msg.sender,
            agentId: agentId,
            score: score,
            category: category,
            comment: comment,
            tradeRef: tradeRef,
            timestamp: block.timestamp
        }));

        reputations[agentId].totalFeedback++;
        reputations[agentId].totalScore += score;

        emit FeedbackSubmitted(agentId, msg.sender, score, category);
    }

    function recordTrade(
        uint256 agentId,
        string calldata chain,
        string calldata pair,
        bool isBuy,
        uint256 amountUsd,
        int256 pnlBps,
        bytes32 txHash
    ) external {
        tradeHistory[agentId].push(TradeRecord({
            agentId: agentId,
            chain: chain,
            pair: pair,
            isBuy: isBuy,
            amountUsd: amountUsd,
            pnlBps: pnlBps,
            executedAt: block.timestamp,
            txHash: txHash
        }));

        reputations[agentId].tradeCount++;
        if (pnlBps > 0) reputations[agentId].successCount++;
        reputations[agentId].totalPnlBps += pnlBps;

        emit TradeRecorded(agentId, chain, pair, pnlBps);
    }

    function getReputation(uint256 agentId) external view returns (AgentReputation memory) {
        return reputations[agentId];
    }

    function getAverageScore(uint256 agentId) external view returns (uint256) {
        AgentReputation memory rep = reputations[agentId];
        if (rep.totalFeedback == 0) return 0;
        return rep.totalScore / rep.totalFeedback;
    }

    function getWinRate(uint256 agentId) external view returns (uint256) {
        AgentReputation memory rep = reputations[agentId];
        if (rep.tradeCount == 0) return 0;
        return (rep.successCount * 10000) / rep.tradeCount; // Returns BPS
    }

    function getTradeCount(uint256 agentId) external view returns (uint256) {
        return tradeHistory[agentId].length;
    }
}
