var express = require('express');
var router = express.Router();
var AdminBusiness = require('../business/administratorBusiness.js');
var CareerBusiness = require('../business/careerBusiness.js');
var SitesBusiness = require('../business/siteBusiness.js');
var SchoolBusiness = require('../business/schoolBusiness.js');
var CoordinatorBusiness = require('../business/coordinatorBusiness.js');

var CarreraDB = require('../db/careersDB.js');
var CoordinadoresDB = require('../db/coordinatorDB.js');
var SedesDB = require('../db/sitesDB.js');
var SchoolDB = require('../db/schoolDB.js');

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/admins')
  .get(async function(req, res, next) {
    let result = await AdminBusiness.selectAllAdmins();
    res.send(result);
  })
  .post(function(req, res, next) {
    person = req.body.person;
    user = req.body.user;
    AdminBusiness.createAdministrator(user, person);
    res.send('success');
  })

router.route('/careers')
  .get(async function(req, res, next) {
    let result = await CareerBusiness.selectAllCareers();
    res.send(result);
  })

router.route('/sites')
  .get(async function(req, res, next) {
    let result = await SitesBusiness.selectAllSites();
    res.send(result);
  })

router.route('/schools')
  .get(async function(req, res, next) {
    let result = await SchoolBusiness.selectAllSchools();
    res.send(result);
  })

router.route('/coordinator')
  .get(async function(req, res, next) {
    let result = await CoordinatorBusiness.selectAllCoordinators();
    res.send(result);
  })
  .post(function(req, res, next) {
    person = req.body.person;
    user = req.body.user;
    CoordinatorBusiness.createCoordinator(person, user);
    res.send('success');
  })

router.route('/semesters')
  .get(async function(req, res, next) {
    let result = await AdminBusiness.selectAllSemesters();
    res.send(result);
  })
module.exports = router;
