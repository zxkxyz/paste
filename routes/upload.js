var express = require('express');
var path = require('path');
var Firebase = require('firebase');
var db = require('../server/db.js').firebase;
var router = express.Router();

router.post('/', function(req, res, next) {
  new Firebase((process.env.FIREBASE_URL || require('../config').FIREBASE_URL) + req.body.title).once('value', function(snap) {
   if(snap.exists()) {
    console.log("that link already exists!");
    res.send({redirect_url: req.header('Referer'), error: "That title already exists!"});
   } else {
    var main = db.child(req.body.title);
    main.child('text').set(req.body.text);
    main.child('timestamp').set(req.body.timestamp);
    main.child('views').set(0);
    res.send({redirect_url: req.header('Referer') + "t/" + req.body.title});
   }
  });
});

router.get('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;