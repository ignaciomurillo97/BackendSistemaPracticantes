const express = require('express');
const router = express.Router();
const ProfessorBusiness = require('../business/professorBusiness.js');
const CoordinatorBusiness = require('../business/coordinatorBusiness.js');

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
    professorBusiness = new ProfessorBusiness();
    await professorBusiness.createProfessor(person);
    res.send('success');
  })

router.route('/event')
  .get(function(req, res, next) {
    res.send('trae los eventos');
  })
  .post(function(req, res, next) {
    coordinatorBusiness = new CoordinatorBusiness();
    coordinatorBusiness.createEvent();
    res.send('success');
  })

module.exports = router;
