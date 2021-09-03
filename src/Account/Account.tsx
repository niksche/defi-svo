import React from "react";
import Web3 from "web3";
import { AbiItem } from 'web3-utils';

const Account = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8584');
    const accounts = await web3.eth.getAccounts();
    return accounts;
}


export default Account;