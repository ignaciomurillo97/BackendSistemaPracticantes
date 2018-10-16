let UserDB = require('../db/userDB.js');

class UserBusiness {

    constructor(){}

    async auth(user){

        let userDB = new UserDB();
        let rows = await userDB.auth(user);
        console.log(rows);
        return rows;

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