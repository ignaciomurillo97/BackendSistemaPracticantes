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
const careerBusiness_1 = require("../business/careerBusiness");
const career_1 = require("../model/career");
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
//# sourceMappingURL=administrator.js.map