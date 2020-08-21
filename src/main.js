const { mkdirSync } = require('fs');

module.exports = () => {
  console.log(process.argv);

  // Making some directories... Mocking a clone from coho
  mkdirSync('./cordova-cli');
  mkdirSync('./cordova-lib');
  mkdirSync('./cordova-common');
  mkdirSync('./cordova-fetch');
  mkdirSync('./cordova-serve');
  mkdirSync('./cordova-create');
  mkdirSync('./cordova-node-xcode');
  mkdirSync('./cordova-android');
  mkdirSync('./cordova-electron');
  mkdirSync('./cordova-ios');
}
