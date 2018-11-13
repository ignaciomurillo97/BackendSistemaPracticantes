"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const administrator_1 = require("../model/administrator");
const administratorBusiness_1 = require("../business/administratorBusiness");
const career_1 = require("../model/career");
const careerBusiness_1 = require("../business/careerBusiness");
const coordinator_1 = require("../model/coordinator");
const coordinatorBusiness_1 = require("../business/coordinatorBusiness");
const semester_1 = require("../model/semester");
const semesterBusiness_1 = require("../business/semesterBusiness");
const site_1 = require("../model/site");
const siteBusiness_1 = require("../business/siteBusiness");
const school_1 = require("../model/school");
const schoolBusiness_1 = require("../business/schoolBusiness");
const user_1 = require("../model/user");
const email_1 = require("../model/email");
const telephoneNumber_1 = require("../model/telephoneNumber");
let router = express.Router();
exports.router = router;
router.route('/')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let adminBusiness = new administratorBusiness_1.AdministratorBusiness();
    let result = yield adminBusiness.selectAdministrator();
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let admin = new administrator_1.Administrator();
    let user = new user_1.User();
    let emailList = new Array();
    let telephoneList = new Array();
    let adminBusiness = new administratorBusiness_1.AdministratorBusiness();
    req.body.Usuario.Cedula = req.body.Administrador.Cedula;
    admin.fromDBNames(req.body.Administrador);
    user.fromDBNames(req.body.Usuario);
    emailList = req.body.Correos.map((obj) => {
        let email = new email_1.Email();
        obj.idPersona = user.id;
        email.fromDBNames(obj);
        return email;
    });
    telephoneList = req.body.Telefonos.map((obj) => {
        let telephone = new telephoneNumber_1.TelephoneNumber();
        obj.idPersona = user.id;
        telephone.fromDBNames(obj);
        return telephone;
    });
    // Validaciones Imaginarias
    adminBusiness.createAdministrator(admin, user, emailList, telephoneList)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function (err) {
        res.send({ success: "fail" });
    });
}));
router.route('/careers')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let careerBusiness = new careerBusiness_1.CareerBusiness();
    let result = yield careerBusiness.selectCareers();
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let careerBusiness = new careerBusiness_1.CareerBusiness();
    let career = new career_1.Career();
    career.fromDBNames(req.body.Carrera);
    // Validaciones Imaginarias
    careerBusiness.createCareer(career)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function () {
        res.send({ success: "fail" });
    });
}));
router.route('/coordinator')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let coordinatorBusiness = new coordinatorBusiness_1.CoordinatorBusiness();
    let result = yield coordinatorBusiness.selectCoordinators();
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let coordinator = new coordinator_1.Coordinator();
    let emailList = new Array();
    let user = new user_1.User();
    let telephoneList = new Array();
    let coordinatorBusiness = new coordinatorBusiness_1.CoordinatorBusiness();
    req.body.Usuario.Cedula = req.body.Coordinador.Cedula;
    coordinator.fromDBNames(req.body.Coordinador);
    user.fromDBNames(req.body.Usuario);
    emailList = req.body.Correos.map((obj) => {
        let email = new email_1.Email();
        obj.idPersona = user.id;
        email.fromDBNames(obj);
        return email;
    });
    telephoneList = req.body.Telefonos.map((obj) => {
        let telephone = new telephoneNumber_1.TelephoneNumber();
        obj.idPersona = user.id;
        telephone.fromDBNames(obj);
        return telephone;
    });
    // Validaciones Imaginarias
    coordinatorBusiness.createCoordinator(coordinator, user, emailList, telephoneList)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function (err) {
        console.error(err);
        res.send({ success: "fail" });
    });
}));
router.route('/semester')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let semesterBusiness = new semesterBusiness_1.SemesterBusiness();
    let result = yield semesterBusiness.selectSemester();
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let semesterBusiness = new semesterBusiness_1.SemesterBusiness();
    let semester = new semester_1.Semester();
    semester.fromDBNames(req.body.Semestre);
    // Validaciones Imaginarias
    semesterBusiness.createSemester(semester)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function () {
        res.send({ success: "fail" });
    });
}));
router.route('/site')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let siteBusiness = new siteBusiness_1.SiteBusiness();
    let result = yield siteBusiness.selectSite();
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let siteBusiness = new siteBusiness_1.SiteBusiness();
    let site = new site_1.Site();
    site.fromDBNames(req.body.Sede);
    // Validaciones Imaginarias
    siteBusiness.createSite(site)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function () {
        res.send({ success: "fail" });
    });
}));
router.route('/school')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let schoolBusiness = new schoolBusiness_1.SchoolBusiness();
    let result = yield schoolBusiness.selectSchools();
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let schoolBusiness = new schoolBusiness_1.SchoolBusiness();
    let school = new school_1.School();
    school.fromDBNames(req.body.Escuela);
    // Validaciones Imaginarias
    schoolBusiness.createSchool(school)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function () {
        res.send({ success: "fail" });
    });
}));
//# sourceMappingURL=administrator.js.map