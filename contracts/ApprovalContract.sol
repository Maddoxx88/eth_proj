pragma solidity ^0.5.8;

contract ApprovalContract {

  address public sender;
  address public receiver;
  address public constant approver = 0x5F72Dcba67e63Cb8269A238Bc5Cd42D465C2969C;

  function deposit(address _receiver) external payable {
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver;
  }

  function viewApprover() external pure returns(address) {
    return(approver);
  }

  function approve() external {
    require(msg.sender == approver);
    address(uint160(receiver)).transfer(address(this).balance);
  }
}
