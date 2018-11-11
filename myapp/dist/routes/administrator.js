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
//DEBUG
const administratorDB_1 = require("../db/administratorDB");
const administrator_1 = require("../model/administrator");
let router = express.Router();
exports.router = router;
router.route('/')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let promise;
    let personDB = new administratorDB_1.AdministratorDB();
    promise = personDB.select();
    let result = yield promise;
    res.send(result);
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let adminDB = new administratorDB_1.AdministratorDB();
    let admin = new administrator_1.Administrator();
    admin.fromDBResult(req.body.Administrator);
    let result = yield adminDB.insert(admin);
    res.send({ result: result });
}));
//# sourceMappingURL=administrator.js.map