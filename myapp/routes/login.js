let express = require('express');
let router = express.Router();
let UserBusiness = require('../business/userBusiness.js');
let User = require('../model/user.js');

/* GET home page. */
router.post ('/', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');

    let loginObject;

    let user = new User();
    user.userName = req.body.username;
    user.password = req.body.password;

    console.log(user);
    let userBusiness = new UserBusiness();
    userBusiness.auth(user);


    res.send('hola');
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
});

module.exports = router;
