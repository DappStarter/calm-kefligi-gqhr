require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food rent rebel random coconut hard light army giggle'; 
let testAccounts = [
"0xf9712c5f3ae10293ee1f46172e18fdb82e7eab561572974261ab05acb71efe56",
"0x209a1dbb66ba1cc95fb3997585adf707755cda40129d87089b03058a28bdc0a4",
"0x9d08765cb3b259d3a045e33869ffd670d3a756da389680e93a2a956a10f3c0a3",
"0xbc2e59bb563002978941c02cd3431c1af84cc818f466a11c91d56d43176d902d",
"0xd2c030b01c82fcdb306c8b435dabf267715687bc69dbd07d2ba9d48282f8df8a",
"0xf1ba81e604dc849b71a22f6e9de868004fbac84e99ceb785b54813d74180324c",
"0x1a6ec976b9c7f678ca11c22daf39bb8ccd616eed7272282de83af92cd57d23f0",
"0xf3d1ba59d878a1b7052ca2f0ea1015c024eb38606c3ebb7a542d1524b2d6a011",
"0x8bb6f1be5c78d7391a6e6b7dde35a6195cbfc36e5ec15b836dc8823fdc35925c",
"0x19de8e45b797661625c7744fd47a9af1dd9d2d64a24d03b8b039249be81f5980"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

