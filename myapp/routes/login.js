var express = require('express');
var router = express.Router();
var user = require('../db/userDB.js')

/* GET home page. */
router.post ('/', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');

    let loginObject;
    let username = req.body.username;
    let password = req.body.password;

    usuario.autenticar(username, password).then(function(dbResponse){
        if (dbResponse.length > 0 && passwordHash.verify(password, dbResponse[0].Contraseña)) {
            req.session.user = dbResponse[0];
            redireccion = redireccionUsuario(dbResponse[0].Tipo)
            loginObject = {'authenticate':true, 'redirect':redireccion};
        }
        else {
            loginObject = {'authenticate':false, 'redirect': null};
        }
        res.send(loginObject);
    })
});

router.delete()

module.exports = router;
