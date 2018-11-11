import express = require('express');
import { Request, Response } from 'express'

//DEBUG
import { AdministratorDB } from '../db/administratorDB'
import { Administrator } from '../model/administrator'

let router = express.Router();


router.route('/')
  .get(async (req: Request, res: Response) => {
    let promise: Promise<Array<Administrator>>;
    let personDB: AdministratorDB = new AdministratorDB();
    promise = personDB.select();
    let result = await promise;
    res.send(result);
  })
  .post (async (req: Request, res: Response) => {
    let adminDB: AdministratorDB = new AdministratorDB();
    let admin: Administrator = new Administrator();
    admin.fromDBResult(req.body.Administrator);
    let result: number = await adminDB.insert(admin);
    res.send({result: result});
  })

export { router };
