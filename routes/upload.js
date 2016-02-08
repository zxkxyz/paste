var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("got a post");
  console.log(req.body);
  fs.writeFile(path.join(__dirname, 'uploads'), req.body, options, callback_);
  res.send(req.body);
});

router.get('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
