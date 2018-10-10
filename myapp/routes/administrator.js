var express = require('express');
var router = express.Router();
var AdminDB = require('../db/adminDB.js');
var CarreraDB = require('../db/carrerasDB.js');
var CoordinadoresDB = require('../db/coordinadoresDB.js');
var SedesDB = require('../db/sedesDB.js');
var SchoolDB = require('../db/schoolDB.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admins', function(req, res, next) {
  adminDB = new AdminDB();
  adminDB.selectAdmins().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  });
})

router.get('/careers', function(req, res, next) {
  carrerasDB = new CarreraDB();
  carrerasDB.selectCarreras().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.get('/sedes', function(req, res, next) {
  sedesDb = new SedesDB();
  sedesDb.selectSedes().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.get('/school', function(req, res, next) {
  schoolDB = new SchoolDB();
  schoolDB.selectSchool().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.get('/coordinator', function(req, res, next) {
  coordinadoresDB = new CoordinadoresDB();
  coordinadoresDB.selectCoordinadores().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.get('/semesters', function(req, res, next) {
  adminDB = new AdminDB();
  adminDB.selectSemesters().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})
module.exports = router;
