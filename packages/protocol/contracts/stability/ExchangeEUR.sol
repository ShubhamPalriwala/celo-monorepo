pragma solidity ^0.5.13;

import "./Exchange.sol";

<<<<<<< HEAD
contract ExchangeEUR is Exchange {
  /**
  * @notice Returns the storage, major, minor, and patch version of the contract.
  * @return The storage, major, minor, and patch version of the contract.
  */
  function getVersionNumber() external pure returns (uint256, uint256, uint256, uint256) {
    return (1, 1, 0, 0);
  }
}
=======
contract ExchangeEUR is Exchange {}
>>>>>>> WIP for cEUR work
