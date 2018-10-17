const express = require('express');
const router = express.Router();
const StudentBusiness = require("../business/studentBusiness.js");
const PersonBusiness = require("../business/personBusiness.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  person = req.body.person;
  user = req.body.user;
  studentInfo = req.body.studentInfo;

  studentBusiness = new StudentBusiness();
  studentBusiness.createStudent(person, studentInfo, user)

  res.send('success');
});

// devuelve solo los datos de persona del estudiante.
router.get('/person', async function(req, res, next) {
  studentBusiness = new StudentBusiness();
  let result = await studentBusiness.selectStudent(1);
  res.send(result);
})

module.exports = router;
