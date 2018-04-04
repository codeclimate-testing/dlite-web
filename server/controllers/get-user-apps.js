'use strict';

const fetchApplication  = require('../models/db/get-application');
const parseUserData     = require('../models/parsers/user-data');

module.exports = function getUserApps(req, res){
  // if user id is in db, fetch all app ids associated with it
  return fetchApplication.byUserId(req.params.id)
    .then((records) => {
      let userData = parseUserData(records);
      userData.userID = req.params.id;
      return userData;
    })
    .then(userData => {
      res.json(userData);
    })
    .catch((err) => {
      console.log('error from server');
      console.log(err);
      res.status(err.statusCode || 500).json(err);
    });
};