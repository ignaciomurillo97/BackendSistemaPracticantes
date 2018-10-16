let UserDB = require('../db/userDB.js');
let bcrypt = require('bcrypt');

module.exports.createUser = function(user) {
  let promise = UserDB.createUser(user);
  return promise;
};

module.exports.authenticate = function(user, password) {
  promise = new Promise(async function(resolve, reject) {
    let dbResponse = await UserDB.selectLoginData(user);
    var sessionData = {};

    if (dbResponse.length == 1 && bcrypt.compareSync(password, dbResponse[0].password)) {
      var selectedUser = dbResponse[0];;
      sessionData.redirect = selectedUser.startPage;
      sessionData.personType = selectedUser.personType;
      sessionData.valid = true;
    } else {
      sessionData.valid = false;
    }

    resolve(sessionData);
  });
  return promise;
}

module.exports.auth = function (user){};
