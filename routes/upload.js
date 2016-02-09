var express = require('express');
var path = require('path');
var db = require('../server/db.js').firebase;
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log("got a post");
  console.log(req.header('Referer') + 't/' + req.body.title);
  var main = db.child(req.body.title);
  main.child('text').set(req.body.text);
  console.log('/t/' + req.body.title);
  res.send({redirect_url: req.header('Referer') + "t/" + req.body.title});
});

router.get('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;