const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

  contract('ApprovalContract', function (accounts) {

    it('intiates contract', async function() {
      const contract = await ApprovalContract.deployed();
      const approver = await contract.approver.call();
      assert.equal(approver, 0x5F72Dcba67e63Cb8269A238Bc5Cd42D465C2969C, "approvers don't match");
    });

    it('takes a deposit', async function(){
      const contract = await ApprovalContract.deployed();
      await contract.deposit(accounts[0], {value: 1e+18, from: accounts[1]});
      const balance = await web3.eth.getBalance(contract.address);
      assert.equal(balance, 1e+18, "amount did not match");
      });
  });
