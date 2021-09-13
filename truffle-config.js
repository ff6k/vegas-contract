var HDWalletProvider = require("@truffle/hdwallet-provider");
// var mnemonic = "parrot guide ribbon seed lady easy dizzy genre vote praise famous help";
// var mnemonic = "flee sadness churn mixture harbor hurry helmet grid valve frame seat voice";
// var mnemonic = "half orbit alpha basket suspect cradle until blue sheriff violin shove flock";
var mnemonic = "flee sadness churn mixture harbor hurry helmet grid valve frame seat voice";
module.exports = {
  rpc: {
    host: "127.0.0.1",
    port: '7545'
  },
  networks: {
    ganache_cli: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ganache_ui: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/6fd2fd8e1b334661b0c38556bd48b257"),
      network_id: 42,
      gas: 4000000,
      skipDryRun: true,
    },
  },
  mocha: {
    useColors: true
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'NPIT4183DK8BMGVZDT9C4R14S1QMEHIT88',
    // etherscan: 'A2HNWK3VKZNQFAGU254HW1DAG4RPB8FI8T',
    bscscan: 'A2HNWK3VKZNQFAGU254HW1DAG4RPB8FI8T'
  },
  compilers: {
    solc: {
      version: "0.5.0",
    }
  }
};