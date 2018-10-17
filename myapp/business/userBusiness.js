let UserDB = require('../db/userDB.js');
let bcrypt = require('bcryptjs');

class UserBusiness {


// module.exports.createUser = function(user) {
//   let promise = UserDB.createUser(user);
//   return promise;
// };
//
// module.exports.authenticate = function(user, password) {
//   promise = new Promise(async function(resolve, reject) {
//     let dbResponse = await UserDB.selectLoginData(user);
//     let sessionData = {};
//
//     if (dbResponse.length == 1 && bcrypt.compareSync(password, dbResponse[0].password)) {
//       let selectedUser = dbResponse[0];;
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

  constructor() { }

  createUser (user) {
    let promise = UserDB.createUser(user);
    return promise;
  };

  async authenticate (user) {

      let userDB = new UserDB;
      let dbResponse = await userDB.authentication(user);
      let sessionData = {};

      if (dbResponse.length == 1 && bcrypt.compareSync(user.password, dbResponse[0].password)) {
        let selectedUser = dbResponse[0];
        sessionData.redirect = selectedUser.startPage;
        sessionData.personType = selectedUser.personType;
        sessionData.valid = true;
      } else {
        sessionData.valid = false;
      }

      return sessionData;

  }
}

module.exports = UserBusiness;
