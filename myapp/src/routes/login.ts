import express = require('express');
import bcryptjs = require("bcryptjs");
import { Request, Response } from 'express'
import {LoginBusiness} from "../business/loginBusiness";
import {User} from "../model/user";
import {LoginToken} from "../model/loginToken";
import {Student} from "../model/student";


const loginBusiness = new LoginBusiness();

let router = express.Router();


router.route('/').post((req: Request, res: Response) => {
    let user: User = new User();
    user.username = req.body.username;
    user.passwordHash = req.body.password;
    loginBusiness.authenticate(user).then((loginToken:LoginToken)=>{
        res.send(loginToken);
    });
});

router.route('/studentRegister').post(( req: Request, res: Response)=>{
    let student = new Student();


});

export { router };



