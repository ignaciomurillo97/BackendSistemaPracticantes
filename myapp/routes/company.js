const express = require('express');
const router = express.Router();
const CompanyBusiness = require('../business/companyBusiness.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  person = req.body.person;
  user = req.body.user;
  companyInfo = req.body.companyInfo;

  CompanyBusiness.createCompany(person, user, companyInfo);

  res.send('success');
});

module.exports = router;
