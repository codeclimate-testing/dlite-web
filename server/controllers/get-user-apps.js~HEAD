'use strict';

const fetchApplication  = require('../models/db/get-application');
const saveUser          = require('../models/db/save-user');
const parseUserData     = require('../models/parsers/user-data');

module.exports = function getUserApps(req, res){
  if (process.env.APP_ENV === 'production' && ((req.params.id !== req.session.user.id) || !req.isAuthenticated())) { return res.status(403); }
  return saveUser({uuid: req.params.id})
    .then(() => {
      // if user id is in db, fetch all app ids associated with it
      return fetchApplication.byUserId(req.params.id)
        .then(records => {
          let userData = parseUserData(records);
          userData.userID = req.params.id;
          return userData;
        })
        .catch((err) => {
          console.log('error from server')
          res.status(err.statusCode || 500).json(err);
        });
    })
    .then(userData => {
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(err.statusCode || 500).json(err);
    });
};