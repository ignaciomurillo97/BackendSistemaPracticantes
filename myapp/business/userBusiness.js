let UserDB = require('../db/userDB.js');
let bcrypt = require('bcrypt');

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


// module.exports.createUser = function(user) {
//   let promise = UserDB.createUser(user);
//   return promise;
// };
//
// module.exports.authenticate = function(user, password) {
//   promise = new Promise(async function(resolve, reject) {
//     let dbResponse = await UserDB.selectLoginData(user);
//     var sessionData = {};
//
//     if (dbResponse.length == 1 && bcrypt.compareSync(password, dbResponse[0].password)) {
//       var selectedUser = dbResponse[0];;
//       sessionData.redirect = selectedUser.startPage;
//       sessionData.personType = selectedUser.personType;
//       sessionData.valid = true;
//     } else {
//       sessionData.valid = false;
//     }
//
//     resolve(sessionData);
//   });
//   return promise;
// }
//
// module.exports.auth = function (user){};
