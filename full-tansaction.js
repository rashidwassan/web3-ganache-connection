
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:7545')

var sendingAddress = 'ADDRESS FROM GANACHE GOES HERE'
var receivingAddress = 'ANOTHER ADDRESS FROM GANACHE GOES HERE'

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

var rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}

rawTransaction

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

var privateKeySender = 'PRIVATE KEY OF SENDER GOES HERE'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);