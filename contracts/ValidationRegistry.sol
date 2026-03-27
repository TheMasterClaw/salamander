// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title ValidationRegistry (ERC-8004 Validation Registry)
 * @notice Generic hooks for independent validation of agent actions.
 *         Supports staker re-execution, zkML proofs, TEE attestations.
 */
contract ValidationRegistry {

    enum ValidationType { STAKE_REEXEC, ZKML_PROOF, TEE_ATTESTATION, PEER_REVIEW }
    enum ValidationStatus { PENDING, APPROVED, REJECTED, DISPUTED }

    struct ValidationRequest {
        uint256 agentId;
        uint256 tradeRef;
        ValidationType vType;
        ValidationStatus status;
        address requester;
        address validator;
        bytes proof;
        uint256 requestedAt;
        uint256 resolvedAt;
        uint256 stake;
    }

    uint256 public requestCount;
    mapping(uint256 => ValidationRequest) public requests;
    mapping(uint256 => uint256[]) public agentValidations;
    mapping(address => bool) public registeredValidators;

    event ValidationRequested(uint256 indexed requestId, uint256 indexed agentId, ValidationType vType);
    event ValidationResolved(uint256 indexed requestId, ValidationStatus status);
    event ValidatorRegistered(address indexed validator);

    function registerValidator() external {
        registeredValidators[msg.sender] = true;
        emit ValidatorRegistered(msg.sender);
    }

    function requestValidation(
        uint256 agentId,
        uint256 tradeRef,
        ValidationType vType
    ) external payable returns (uint256) {
        requestCount++;

        requests[requestCount] = ValidationRequest({
            agentId: agentId,
            tradeRef: tradeRef,
            vType: vType,
            status: ValidationStatus.PENDING,
            requester: msg.sender,
            validator: address(0),
            proof: "",
            requestedAt: block.timestamp,
            resolvedAt: 0,
            stake: msg.value
        });

        agentValidations[agentId].push(requestCount);
        emit ValidationRequested(requestCount, agentId, vType);
        return requestCount;
    }

    function resolveValidation(
        uint256 requestId,
        bool approved,
        bytes calldata proof
    ) external {
        require(registeredValidators[msg.sender], "Not a registered validator");
        ValidationRequest storage req = requests[requestId];
        require(req.status == ValidationStatus.PENDING, "Already resolved");

        req.validator = msg.sender;
        req.proof = proof;
        req.status = approved ? ValidationStatus.APPROVED : ValidationStatus.REJECTED;
        req.resolvedAt = block.timestamp;

        // Return stake to requester if approved
        if (approved && req.stake > 0) {
            payable(req.requester).transfer(req.stake);
        }

        emit ValidationResolved(requestId, req.status);
    }

    function getAgentValidations(uint256 agentId) external view returns (uint256[] memory) {
        return agentValidations[agentId];
    }

    function getApprovalRate(uint256 agentId) external view returns (uint256) {
        uint256[] memory vals = agentValidations[agentId];
        if (vals.length == 0) return 0;

        uint256 approved = 0;
        for (uint256 i = 0; i < vals.length; i++) {
            if (requests[vals[i]].status == ValidationStatus.APPROVED) approved++;
        }
        return (approved * 10000) / vals.length;
    }
}
