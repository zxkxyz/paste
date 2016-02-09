var express = require('express');
var path = require('path');
var Firebase = require("firebase");
var db = require('../server/db.js').firebase;
var router = express.Router();
var qs = require('querystring');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/:something', function(req, res, next) {
 var path = db.child(req.params.something).child('text');
  new Firebase((process.env.FIREBASE_URL || require('../config').FIREBASE_URL) + req.params.something + "/text").once('value', function(snap) {
   console.log(snap.val());
   if(snap.val() === null) {
    res.redirect('/');
   }
   res.render('file', { title: req.params.something, text: snap.val() });
  });
});

module.exports = router;