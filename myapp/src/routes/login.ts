import express = require('express');
import { Request, Response } from 'express'
import {LoginBusiness} from "../business/loginBusiness";
import {User} from "../model/user";

const loginBusiness = new LoginBusiness();

let router = express.Router();


router.route('/').post((req: Request, res: Response) => {

});

export { router };



