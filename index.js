// simple demonstration of connecting web3 to ganache

var url = 'HTTP://127.0.0.1:7545';
let web3 = require('web3');

let Web3 = new web3(url);

console.log(Web3);

Web3.eth.getAccounts().then(accounts => console.log(accounts));