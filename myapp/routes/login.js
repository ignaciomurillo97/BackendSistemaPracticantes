let express = require('express');
let router = express.Router();
let UserBusiness = require('../business/userBusiness.js');
let User = require('../model/user.js')

router.post ('/', function(req, res, next){

    res.setHeader('Content-Type', 'application/json');

    let loginObject;

    let user = new User();
    user.userName = req.body.username;
    user.password = req.body.password;

    let userBusiness = new UserBusiness();

    let loginData = userBusiness.authenticate(user);

    res.send(loginData);


    // usuario.autenticar(username, password).then(function(dbResponse){
        // if (dbResponse.length > 0 && passwordHash.verify(password, dbResponse[0].Contraseña)) {
        //     req.session.user = dbResponse[0];
        //     redireccion = redireccionUsuario(dbResponse[0].Tipo)
        //     loginObject = {'authenticate':true, 'redirect':redireccion};
        // }
        // else {
        //     loginObject = {'authenticate':false, 'redirect': null};
        // }
        // res.send(loginObject);
    // })

  // res.setHeader('Content-Type', 'application/json');
  // let username = req.body.username;
  // let password = req.body.password;
  //
  // userBusiness = new UserBusiness();
  // userBusiness.authenticate(username, password)
  //   .then(function(response) {
  //     if (response.valid) {
  //       req.session.personType = response.personType;
  //     }
  //     res.send(response);
  //   })
});

module.exports = router;
