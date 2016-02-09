var Firebase = require('firebase');
var myFirebaseRef = new Firebase(process.env.FIREBASE_URL || require('../config').FIREBASE_URL);

module.exports = {
  firebase: myFirebaseRef,
};