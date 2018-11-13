"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const administrator_1 = require("./routes/administrator");
const company_1 = require("./routes/company");
const coordinator_1 = require("./routes/coordinator");
const student_1 = require("./routes/student");
const login_1 = require("./routes/login");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use('/administrator', administrator_1.router);
app.use('/company', company_1.router);
app.use('/coordinator', coordinator_1.router);
app.use('/student', student_1.router);
app.use('/login', login_1.router);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map