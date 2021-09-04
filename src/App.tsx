import React from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import Comp from './Comp';

import contractAddress from './SmartContract/.config/SmartContractAddress';
import contractABI from './SmartContract/.config/SmartContractABI.json';


function App() {
  return (
    <div className="App">
      
      <button onClick= {Comp}>Click me!!</button>
      hey
    </div>
  );
}

export default App;
