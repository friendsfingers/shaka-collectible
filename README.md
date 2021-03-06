# Shaka Collectible

[![Build Status](https://travis-ci.org/FriendsFingers/shaka-collectible.svg?branch=master)](https://travis-ci.org/FriendsFingers/shaka-collectible)
[![Coverage Status](https://coveralls.io/repos/github/FriendsFingers/shaka-collectible/badge.svg?branch=master)](https://coveralls.io/github/FriendsFingers/shaka-collectible?branch=master)


An ERC721 NFT Token that represents a Collectible Shaka.

You can view the DApp working [here](https://collectibles.friendsfingers.com) and explore the DApp Source Code [here](https://github.com/friendsfingers/shaka-collectible/tree/dapp).


## Installation


Install truffle.

```bash
npm install -g truffle      // Version 4.1.13+ required.
```


## Install dependencies


```bash
npm install
```


## Linter


Use Solium

```bash
npm run lint:sol
```

Lint and fix all

```bash
npm run lint:all:fix
```


## Compile and test the contracts.
 

Open the Truffle console

```bash
truffle develop
```

Compile 

```bash
compile 
```

Test

```bash
test
```


## Run server


Run the `liteserver` development server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.

```bash
npm run dev
```



## Optional


Install the [truffle-flattener](https://github.com/alcuadrado/truffle-flattener)

```bash
npm install -g truffle-flattener
```
 
 
Usage 

```bash
truffle-flattener contracts/token/ShakaCollectible.sol >> dist/ShakaCollectible.sol
```

 
## Links

Solidity [Doc](https://solidity.readthedocs.io) [Github](https://solidity.readthedocs.io)

OpenZeppelin [Doc](https://openzeppelin.org/api/docs/open-zeppelin.html) [Github](https://github.com/OpenZeppelin)

Truffle [Doc](http://truffleframework.com/docs) [Github](https://github.com/trufflesuite/truffle)

Web3.js [Doc 0.20.6](https://github.com/ethereum/wiki/wiki/JavaScript-API) [Doc 1.0.*](http://web3js.readthedocs.io/en/1.0) [Github](https://github.com/ethereum/web3.js)
