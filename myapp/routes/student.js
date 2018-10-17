const express = require('express');
const router = express.Router();
const StudentBusiness = require("../business/studentBusiness.js");


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

module.exports = router;
