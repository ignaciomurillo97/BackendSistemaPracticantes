const express = require('express');
const router = express.Router();
const PersonBusiness = require("../business/personBusiness.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// devuelve solo los datos de persona del estudiante.
router.get('/person', async function(req, res, next) {
  personBusiness = new PersonBusiness();
  let result = await personBusiness.selectPersonByType(5);
  res.send(result);
})

module.exports = router;
