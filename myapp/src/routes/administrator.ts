import express = require('express');
import { Request, Response } from 'express'
import { Administrator } from '../model/administrator'
import { AdministratorBusiness } from '../business/administratorBusiness'
import { CareerBusiness } from '../business/careerBusiness'
import { Career } from '../model/career'
import { User } from '../model/user'
import { Email } from '../model/email'
import { TelephoneNumber } from '../model/telephoneNumber'

let router = express.Router();


router.route('/')
  .get(async (req: Request, res: Response) => {
    let adminBusiness: AdministratorBusiness = new AdministratorBusiness();
    let result: Array<Administrator> = await adminBusiness.selectAdministrator();
    res.send(result);
  })
  .post (async (req: Request, res: Response) => {
    let admin: Administrator = new Administrator();
    let user: User = new User();
    let emailList: Array<Email> = new Array();
    let telephoneList: Array<TelephoneNumber> = new Array();

    let adminBusiness: AdministratorBusiness = new AdministratorBusiness();

    req.body.Usuario.Cedula = req.body.Administrador.Cedula;
    admin.fromDBNames(req.body.Administrador);
    user.fromDBNames(req.body.Usuario);

    emailList = req.body.Correos.map( (obj: any) => {
      let email: Email = new Email();
      obj.idPersona = user.id;
      email.fromDBNames(obj);
      return email;
    } )

    telephoneList = req.body.Telefonos.map( (obj: any) => {
      let telephone: TelephoneNumber = new TelephoneNumber();
      obj.idPersona = user.id;
      telephone.fromDBNames(obj);
      return telephone;
    } )

    // Validaciones Imaginarias

    adminBusiness.createAdministrator(admin, user, emailList, telephoneList)
      .then(function () {
        res.send({success: "success"});
      })
      .catch(function(err: any) {
        res.send({success: "fail"});
      })
  })

router.route('/careers')
  .get(async (req: Request, res: Response) => {
    let careerBusiness: CareerBusiness = new CareerBusiness();
    let result: Array<Career> = await careerBusiness.selectCareers();
    res.send(result);
  })
  .post(async (req: Request, res: Response) => {
    let careerBusiness: CareerBusiness = new CareerBusiness();
    let career: Career = new Career();
    career.fromDBNames(req.body.Carrera);

    // Validaciones Imaginarias

    careerBusiness.createCareer(career)
      .then ( function() {
        res.send({success: "success"});
      } )
      .catch ( function() {
        res.send({success: "fail"});
      } )
  })

export { router };
