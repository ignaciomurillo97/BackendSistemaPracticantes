let UserDB = require('../db/userDB.js');

class UserBusiness {

    constructor(){

    }

    auth(user){

        let userDB = new UserDB();
        userDB.auth(user).then((rows) => {
            //logica para el login usando objeto user 
        });

        // if (dbResponse.length > 0 && passwordHash.verify(password, dbResponse[0].Contraseña)) {
        //     req.session.user = dbResponse[0];
        //     redireccion = redireccionUsuario(dbResponse[0].Tipo)
        //     loginObject = {'authenticate':true, 'redirect':redireccion};
        // }
        // else {
        //     loginObject = {'authenticate':false, 'redirect': null};
        // }
        // res.send(loginObject);

    }
}

module.exports = UserBusiness;