# eth_proj
Requirements:-
1. Truffle for a running server (https://www.trufflesuite.com/docs/truffle/getting-started/installation)
2. Ganache for a wallet where you can view all possible addresses with their corresponding values in their respective wallets (https://www.trufflesuite.com/ganache) 
3. If you face any naming issues after during installing Truffle or after it you can head over to this page to work around it (https://www.trufflesuite.com/docs/truffle/reference/configuration)
4. Geth to test and run your network locally to verify transactions (https://geth.ethereum.org/downloads/) this is the installer package link, you can further run the executables here (https://github.com/ethereum/go-ethereum) or also by grabbing keys from the keyserver network.
5. Enable the metamask extension in your Chrome browser (https://metamask.io/). Also it only supports Opera, Firefox and Brave other than Chrome.
6. Solidity package support in your respective IDE (If you're using Atom you can install solidity support package here: https://atom.io/packages/linter-solidity) Atom -> Settings -> Install -> search 'linter-solidity'

STEPS:-
!! Make sure you've opened up the Ganache GUI for 10 test acoounts using Quick Start tab !!
1. Create an empty project directory anywhere you want.(Make sure truffle is installed by running "truffle.cmd version" for windows and "truffle version" for macOS)
2. Create ApprovalContract.sol 
3. Compile it using 'truffle compile' (truffle.cmd compile in case of Windows)
4. Edit truffle.js as for one network and also create and edit 2_deploy_contracts.js
5. Run truffle develop
6. Run truffle migrate development in another command line tab
7. Create and edit the file which is listed under the test folder (approvalcontract.js)
8. Run truffle tests
9. It should output a window like my output (truffle tests.jpg)

If you make it up till here you've successfully created, compiled and migrated a small smart contract using Truffle.

You can further test your network locally using geth

Just type in geth to check if you can connect to your Eth network.

Run geth --testnet account new to setup a new account

Next Run geth --testnet --cache 1024 --rpc --rpcapi eth,net,web3,personal which should make your netwrok block live just as my output (eth_geth_block_running.jpg)

Head over to https://faucet.ropsten.be/ and type in the adddress which was assigned to you when you created a geth account earlier.

Click the "Send me test Ether" button and after the transaction takes place click on your address to view your transaction just like my output (ropsten_overview.jpg)

Now you've successfully tested your network locally using geth and also on the ropsten network !
