import knex = require('knex');

var knexConf = knex({
  client: "mysql",
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'SistemaPracticantes'
  },
  pool: { min: 0, max: 7 }
});
export { knexConf as knex }
