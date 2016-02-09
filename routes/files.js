var express = require('express');
var path = require('path');
var Firebase = require("firebase");
var db = require('../server/db.js').firebase;
var router = express.Router();
var qs = require('querystring');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/:something', function(req, res, next) {
  new Firebase((process.env.FIREBASE_URL || require('../config').FIREBASE_URL) + req.params.something).once('value', function(snap) {
   if(snap.val() === null) {
     res.redirect('/');
   } else {
     var currview = snap.val().views + 1;
     var main = db.child(req.params.something);
     main.child('views').set(currview);
     res.render('file', { title: req.params.something, text: snap.val().text, timestamp: snap.val().timestamp, views: currview });
   }
  });
});

module.exports = router;