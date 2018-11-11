"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loginBusiness_1 = require("../business/loginBusiness");
const loginBusiness = new loginBusiness_1.LoginBusiness();
let router = express.Router();
exports.router = router;
router.route('/').post((req, res) => {
});
//# sourceMappingURL=login.js.map