import React from "react";
import Web3 from "web3";
import { AbiItem } from 'web3-utils';
import contractABI from './.config/SmartContractABI.json';
import contractAddress from './.config/SmartContractAddress';

const SmartContract = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8584');
    return new web3.eth.Contract(contractABI as AbiItem[], contractAddress);
};

export default SmartContract;