import express = require('express');
import { Request, Response } from 'express'
import { Administrator } from '../model/administrator'
import { AdministratorBusiness } from '../business/administratorBusiness'
import { Career } from '../model/career'
import { CareerBusiness } from '../business/careerBusiness'
import { Coordinator } from '../model/coordinator'
import { CoordinatorBusiness } from '../business/coordinatorBusiness'
import { Semester } from '../model/semester'
import { SemesterBusiness } from '../business/semesterBusiness'
import { Site } from '../model/site'
import { SiteBusiness } from '../business/siteBusiness'
import { School } from '../model/school'
import { SchoolBusiness } from '../business/schoolBusiness'
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

router.route('/coordinator')
  .get(async (req: Request, res: Response) => {
    let coordinatorBusiness = new CoordinatorBusiness();
    let result: Array<Coordinator> = await coordinatorBusiness.selectCoordinators();
    res.send(result);
  })
  .post (async (req: Request, res: Response) => {
    let coordinator: Coordinator = new Coordinator();
    let emailList: Array<Email> = new Array();
    let user: User = new User();
    let telephoneList: Array<TelephoneNumber> = new Array();

    let coordinatorBusiness: CoordinatorBusiness = new CoordinatorBusiness();

    req.body.Usuario.Cedula = req.body.Coordinador.Cedula;
    coordinator.fromDBNames(req.body.Coordinador);
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

    coordinatorBusiness.createCoordinator(coordinator, user, emailList, telephoneList)
      .then(function () {
        res.send({success: "success"});
      })
      .catch(function(err: any) {
        console.error(err);
        res.send({success: "fail"});
      })
  })

router.route('/semester')
  .get(async (req: Request, res: Response) => {
    let semesterBusiness: SemesterBusiness = new SemesterBusiness();
    let result: Array<Semester> = await semesterBusiness.selectSemester();
    res.send(result);
  })
  .post(async (req: Request, res: Response) => {
    let semesterBusiness: SemesterBusiness = new SemesterBusiness();
    let semester: Semester = new Semester();
    semester.fromDBNames(req.body.Semestre);

    // Validaciones Imaginarias

    semesterBusiness.createSemester(semester)
      .then ( function() {
        res.send({success: "success"});
      } )
      .catch ( function() {
        res.send({success: "fail"});
      } )
  })

router.route('/site')
  .get(async (req: Request, res: Response) => {
    let siteBusiness: SiteBusiness = new SiteBusiness();
    let result: Array<Site> = await siteBusiness.selectSite();
    res.send(result);
  })
  .post(async (req: Request, res: Response) => {
    let siteBusiness: SiteBusiness = new SiteBusiness();
    let site: Site = new Site();
    site.fromDBNames(req.body.Sede);

    // Validaciones Imaginarias

    siteBusiness.createSite(site)
      .then ( function() {
        res.send({success: "success"});
      } )
      .catch ( function() {
        res.send({success: "fail"});
      } )
  })

router.route('/school')
  .get(async (req: Request, res: Response) => {
    let schoolBusiness: SchoolBusiness = new SchoolBusiness();
    let result: Array<School> = await schoolBusiness.selectSchools();
    res.send(result);
  })
  .post(async (req: Request, res: Response) => {
    let schoolBusiness: SchoolBusiness = new SchoolBusiness();
    let school: School = new School();
    school.fromDBNames(req.body.Escuela);

    // Validaciones Imaginarias

    schoolBusiness.createSchool(school)
      .then ( function() {
        res.send({success: "success"});
      } )
      .catch ( function() {
        res.send({success: "fail"});
      } )
  })

export { router };
