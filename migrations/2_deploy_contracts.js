var EC = artifacts.require('./ECsecp256k1.sol');

module.exports = function(deployer) {
    deployer.deploy(EC);
};