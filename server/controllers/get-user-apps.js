'use strict';

const fetchApplication  = require('../models/db/get-application');
const parseUserData     = require('../models/parsers/user-data');

module.exports = function getUserApps(req, res){
  // if user id is in db, fetch all app ids associated with it
  return fetchApplication.byUserId(req.params.uuid)
    .then((records) => {
      console.log('records received');
      console.log(records)
      let userData = parseUserData(records);
      userData.userID = req.params.uuid;
      return userData;
    })
    .then((userData) => {
      console.log('user data received');
      console.log(userData);
      res.json(userData);
    })
    .catch((err) => {
      console.log('error from server');
      console.log(err);
      res.status(err.statusCode || 500).json(err);
    });
};