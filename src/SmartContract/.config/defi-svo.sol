pragma solidity >=0.4.24 <0.6.0;

contract SimplePaymentChannel {
    address payable public sender;      // The account sending payments.
    address payable public recipient;   // The account receiving the payments.
    uint256 public expiration;  // Timeout in case the recipient never closes.


    bool isContractActive = false;
    uint freeFunds = 0;
    uint monthlyPayment  = 0;
    uint nonCombustibleAmount = 0; 

    constructor (address payable _recipient, uint _monthlyPayment)
        public
        payable
    {
        monthlyPayment = _monthlyPayment;
        sender = msg.sender;
        recipient = _recipient;
        expiration = now + 10 ** 6;
    }

    function isValidSignature(uint256 amount, bytes memory signature)
        internal
        view
        returns (bool)
    {
        bytes32 message = prefixed(keccak256(abi.encodePacked(this, amount)));

        // check that the signature is from the payment sender
        return recoverSigner(message, signature) == sender;
    }

    function close(uint256 amount) public {
        // require(msg.sender == recipient);
        // require(isValidSignature(amount, signature));

        recipient.transfer(amount);
        selfdestruct(sender);
    }


    function payAndExtend() public {
        // require(msg.sender == sender);
        // require(_amountOfMoney > monthlyPayment);
        expiration += 30 days;
    }


    function claimTimeout() public {
        require(now >= expiration);
        selfdestruct(sender);
    }
    
    
    function seeTimeLeft() public view returns (uint256) {
        return (expiration - now);
    }


    function splitSignature(bytes memory sig)
        internal
        pure
        returns (uint8 v, bytes32 r, bytes32 s)
    {
        require(sig.length == 65);

        assembly {
            // first 32 bytes, after the length prefix
            r := mload(add(sig, 32))
            // second 32 bytes
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(sig, 96)))
        }

        return (v, r, s);
    }

    function recoverSigner(bytes32 message, bytes memory sig)
        internal
        pure
        returns (address)
    {
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(sig);

        return ecrecover(message, v, r, s);
    }

    /// builds a prefixed hash to mimic the behavior of eth_sign.
    function prefixed(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}