import express = require('express');
import { Request, Response } from 'express'

//DEBUG
import { PersonDB } from '../db/personDB'

let router = express.Router();


router.route('/')
  .get(async (req: Request, res: Response) => {
    let promise: any;
    let personDB: PersonDB = new PersonDB();
    promise = personDB.select();
    let result = await promise;
    res.send(result);
  });

export { router };



