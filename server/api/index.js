const router = require('express').Router();

const userDataService = require('../services/user-data');

const getApplication = require('../models/db/get-application');
const createApplication = require('../models/db/create-application');

router.get('/user-data/:uuid', getUserDataHandler);
router.post('/user-data', postUserDataHandler);

function getUserDataHandler(req, res) {
  getApplication(req.params.uuid)
    .then(function(data) {
      res.send(data);
    });
}

function postUserDataHandler(req, res) {
  createApplication(req.body.application)
    .then(function(data) {
      res.send(data);
    });
}

module.exports = router;
module.exports.getUserDataHandler = getUserDataHandler;
module.exports.postUserDataHandler = postUserDataHandler;
