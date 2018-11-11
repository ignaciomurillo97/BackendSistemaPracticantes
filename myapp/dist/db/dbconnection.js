"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
var knexConf = knex({
    client: "mysql",
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'SistemaPracticantes'
    },
    pool: { min: 0, max: 7 }
});
exports.knex = knexConf;
//# sourceMappingURL=dbconnection.js.map