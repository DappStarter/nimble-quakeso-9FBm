require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan reward stereo coin grace opinion slot genre'; 
let testAccounts = [
"0xacc6cc2b7afc94f870827ee36d717a2a2deeca414a27790650bdcfb93c69fd85",
"0x485d6dab75477fb7cdbd1fdf84946d88eebb40710aa8694e859ceb041b1e6833",
"0x549fda85140aa47fbdf13e2a515d69f6ef74f6af3300e4830078429011a09b0c",
"0x6bb149fa7ced58df447da31b940d7691176adf8546c24256bef20033d156bb2b",
"0xcea21e2770776a44e57659e1283da478cc497fb35eb3a398da8917b834d60d5e",
"0x31c0a3158661d5bec8a4f63cb3d097cfc75180903762ca0e6ecbd44b0ce84baa",
"0x68ae3d2f165910abced236b36a199c3d96cc3e9d3b9f9517e289f1d3f2a13d2d",
"0x2ee4bd37b7b06191b645883f0baa206933e225d3d219ad0fbdfd310fd1574447",
"0xe3063f7f7d485dd21a438bc6c11a5295063a9566fe36fe0b0d8fdea1ababa35d",
"0x1a50f74122a5a262267ebe2b79cf7b1ce561c1783967b4de2098e39967a8f8d6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


