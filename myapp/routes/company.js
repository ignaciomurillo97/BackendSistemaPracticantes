const express = require('express');
const router = express.Router();
const CompanyBusiness = require('../business/companyBusiness.js');
const PersonBusiness = require("../business/personBusiness.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  person = req.body.person;
  user = req.body.user;
  companyInfo = req.body.companyInfo;

companyBusiness = new CompanyBusiness();
  companyBusiness.createCompany(person, user, companyInfo);

  res.send('success');
});


// devuelve solo los datos de persona del estudiante.
router.get('/person', async function(req, res, next) {
  personBusiness = new PersonBusiness();
  let result = await personBusiness.selectPersonByType(2);
  res.send(result);
})

module.exports = router;
