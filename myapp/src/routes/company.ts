import express = require('express');
import { Request, Response } from 'express'

let router = express.Router();


router.route('/').get((req: Request, res: Response) => {

});

export { router };



