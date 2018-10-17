let express = require('express');
let router = express.Router();
let UserBusiness = require('../business/userBusiness.js');
let User = require('../model/user.js');
let bcrypt = require('bcryptjs');

router.post ('/', function(req, res, next){

    res.setHeader('Content-Type', 'application/json');


    let user = new User();
    user.userName = req.body.userName;
    user.password = req.body.password;


    let userBusiness = new UserBusiness();

    userBusiness.authenticate(user).then((data) => {
        res.send(data);
    });
});

module.exports = router;
