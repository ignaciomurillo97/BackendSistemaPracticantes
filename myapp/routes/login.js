let express = require('express');
let router = express.Router();
let UserBusiness = require('../business/userBusiness.js');

router.post ('/', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  let username = req.body.username;
  let password = req.body.password;

  userBusiness = new UserBusiness();
  userBusiness.authenticate(username, password)
    .then(function(response) {
      if (response.valid) {
        req.session.personType = response.personType;
      }
      res.send(response);
    })
});

module.exports = router;
