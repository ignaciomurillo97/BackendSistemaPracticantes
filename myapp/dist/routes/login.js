"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loginBusiness_1 = require("../business/loginBusiness");
const user_1 = require("../model/user");
const student_1 = require("../model/student");
const loginBusiness = new loginBusiness_1.LoginBusiness();
let router = express.Router();
exports.router = router;
router.route('/').post((req, res) => {
    let user = new user_1.User();
    user.username = req.body.username;
    user.passwordHash = req.body.password;
    loginBusiness.authenticate(user).then((loginToken) => {
        res.send(loginToken);
    });
});
router.route('/studentRegister').post((req, res) => {
    let student = new student_1.Student();
});
//# sourceMappingURL=login.js.map