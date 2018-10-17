const express = require('express');
const router = express.Router();
const ProfessorBusiness = require('../business/professorBusiness.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/professors')
  .get(function(req, res, next) {
    res.send('respond with a resource');
  })
  .post(async function(req, res, next) {
    person = req.body.person;
    await ProfessorBusiness.createProfessor(person);
    res.send('success');
  })

module.exports = router;
