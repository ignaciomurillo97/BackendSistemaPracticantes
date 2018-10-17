var express = require('express');
var router = express.Router();
var AdminBusiness = require('../business/administratorBusiness.js');
var CareerBusiness = require('../business/careerBusiness.js');
var SitesBusiness = require('../business/siteBusiness.js');
var SchoolBusiness = require('../business/schoolBusiness.js');
var CoordinatorBusiness = require('../business/coordinatorBusiness.js');

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/admins')
  .get(async function(req, res, next) {
    adminBusiness = new AdminBusiness();
    let result = await adminBusiness.selectAllAdmins();
    res.send(result);
  })
  .post(function(req, res, next) {
    adminBusiness = new AdminBusiness();
    person = req.body.person;
    user = req.body.user;
    adminBusiness.createAdministrator(user, person);
    res.send('success');
  })

router.route('/careers')
  .get(async function(req, res, next) {
    careerBusiness = new CareerBusiness();
    let result = await careerBusiness.selectAllCareers();
    res.send(result);
  })

router.route('/sites')
  .get(async function(req, res, next) {
    sitesBusiness = new SitesBusiness();
    let result = await sitesBusiness.selectAllSites();
    res.send(result);
  })

router.route('/schools')
  .get(async function(req, res, next) {
    schoolBusiness = new SchoolBusiness();
    let result = await schoolBusiness.selectAllSchools();
    res.send(result);
  })

router.route('/coordinator')
  .get(async function(req, res, next) {
    coordinatorBusiness = new CoordinatorBusiness();
    let result = await coordinatorBusiness.selectAllCoordinators();
    res.send(result);
  })
  .post(function(req, res, next) {
    person = req.body.person;
    user = req.body.user;
    coordinatorBusiness = new CoordinatorBusiness();
    coordinatorBusiness.createCoordinator(person, user);
    res.send('success');
  })

router.route('/semesters')
  .get(async function(req, res, next) {
    adminBusiness = new AdminBusiness();
    let result = await adminBusiness.selectAllSemesters();
    res.send(result);
  })
module.exports = router;
