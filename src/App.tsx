import React from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import './styles.css';

import Comp from './Comp';

import contractAddress from './SmartContract/.config/SmartContractAddress';
import contractABI from './SmartContract/.config/SmartContractABI.json';


function App() {
  return (
    <div className="">
      <button className = "App" onClick= {Comp}>Keep calm and pay to svo</button>
    </div>
  );
}

export default App;
