const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "1803d45e627e4b768d06410f3071e329";
const infuraURL = 'https://ropsten.infura.io/v3/6fe674208a2943f9aeb282f4705b483b';

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

var HDWallet = require('truffle-hdwallet-provider');


module.exports = {

  plugins: ["truffle-security"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
      //websockets: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 3,          // Ropsten network id
            gas: 5500000,
      ens: {
        registry: {
          address: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
        }
      }
    }
  },

  compilers: {
    solc: {
      version: "0.5.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },

  
  ens: {
    enabled: true
  } 
}
