import React from "react";
import Web3 from "web3";
import { AbiItem } from 'web3-utils'

const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8584');
    const network = await web3.eth.net.getNetworkType();
    const accounts = await  web3.eth.getAccounts();
    console.log("accounts:", accounts[0]);

    const contract_abi = [
        {
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const contract_address = "0x8B14755424E6dd4BC70F6d0C540db2Ddb69F4665";
    const counter = new web3.eth.Contract(contract_abi as AbiItem[], contract_address);
    
    await counter.methods.increment().send({from: accounts[0]}).on('receipt', () => {
        console.log("I printed it");
    });
    console.log("accounts:", await counter.methods.getCount().call());


  }
  
const Comp = () => {
    return (<div>
        <button onClick = {loadBlockchainData}>Click me!</button>
    </div>);
}
export  default Comp;