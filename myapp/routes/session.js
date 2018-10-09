var express = require('express');
var user = require('../model/person/user.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  console.log("register");
  res.send('register');
});

module.exports = router;
