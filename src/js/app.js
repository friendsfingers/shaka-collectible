App = {
  web3Provider: null,
  contracts: {},
  instances: {},
  init: function () {
    return App.initWeb3();
  },
  initWeb3: function () {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },
  initContract: function () {
    $.getJSON('ShakaCollectible.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      App.contracts.ShakaCollectible = TruffleContract(data);

      // Set the provider for our contract.
      App.contracts.ShakaCollectible.setProvider(App.web3Provider);
    });
  },
  deployToken: async function () {
    const name = 'ShakaCollectible';
    const symbol = 'NFS';

    const logs = await App.contracts.ShakaCollectible.new(name, symbol);

    console.log(logs);
  },
};

$(function() {
  $(window).load(function () {
    App.init();
  });
});
