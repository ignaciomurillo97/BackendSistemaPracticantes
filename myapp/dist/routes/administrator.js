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
    let adminBusiness = new administratorBusiness_1.AdministratorBusiness();
    admin.fromDBNames(req.body.Administrator);
    adminBusiness.createAdministrator(admin)
        .then(function () {
        res.send({ success: "success" });
    })
        .catch(function (err) {
        res.send({ success: "fail" });
    });
}));
//# sourceMappingURL=administrator.js.map