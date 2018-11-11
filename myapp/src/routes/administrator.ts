import express = require('express');
import { Request, Response } from 'express'
import { Administrator } from '../model/administrator'
import { AdministratorBusiness } from '../business/administratorBusiness'

//DEBUG
import { AdministratorDB } from '../db/administratorDB'

let router = express.Router();


router.route('/')
  .get(async (req: Request, res: Response) => {
    let adminBusiness: AdministratorBusiness = new AdministratorBusiness();
    let result: Array<Administrator> = await adminBusiness.selectAdministrator();
    res.send(result);
  })
  .post (async (req: Request, res: Response) => {
    let admin: Administrator = new Administrator();
    let adminBusiness: AdministratorBusiness = new AdministratorBusiness();
    admin.fromDBResult(req.body.Administrator);
    adminBusiness.createAdministrator(admin)
      .then(function () {
        res.send({success: "success"});
      })
      .catch(function(err) {
        res.send({success: "fail"});
      })
  })

export { router };
