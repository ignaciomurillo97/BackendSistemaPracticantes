const express = require('express');
const router = express.Router();
const ProfessorBusiness = require('../business/professorBusiness.js');
const CoordinatorBusiness = require('../business/coordinatorBusiness.js');
const Event = require('../model/event.js');
const Activity = require('../model/activity.js');

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
    let recievedEvent = req.body.event;
    let event = new Event(
      recievedEvent.date,
      recievedEvent.startTime,
      recievedEvent.endTime,
      recievedEvent.type,
      recievedEvent.name,
    );
    let activities = []
    for (i = 0; i < recievedEvent.activities.length; i++) {
      let newActivity = new Activity(
        recievedEvent.activities[i].startTime,
        recievedEvent.activities[i].endTime
      );
      activities.push(newActivity);
    }

    coordinatorBusiness = new CoordinatorBusiness();
    coordinatorBusiness.createEvent(event, activities);
    res.send('success');
  })

module.exports = router;
