var Firebase = require('firebase');
var config = require('../config');
var myFirebaseRef = new Firebase(config.FIREBASE_URL);

module.exports = {
  firebase: myFirebaseRef,
};