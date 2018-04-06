'use strict';

const fetchApplication  = require('../models/db/get-application');
const parseUserData     = require('../models/parsers/user-data');
const saveUser          = require('../models/db/save-user');

module.exports = function getUserApps(req, res){
  // if user id is in db, fetch all app ids associated with it
  return saveUser({uuid: req.params.uuid})
  .then(() => {
    return fetchApplication.byUserId(req.params.uuid)
    .then((records) => {
      console.log('got records for uuid: ');
      let userData = parseUserData(records);
      userData.userID = req.params.uuid;
      return userData;
    })
  })
  .then((userData) => {
    console.log('preparing to send user data');
    res.json(userData);
  })
  .catch((err) => {
    console.log('error from server');
    console.log(err);
    res.status(err.statusCode || 500).json(err);
  });

};