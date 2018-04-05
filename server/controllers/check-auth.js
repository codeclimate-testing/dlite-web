'use strict';

module.exports = function checkAuth(req, res, next) {

  // check headers here
  let isLoggedIn;

  if (process.env.APP_ENV === 'development' || process.env.APP_ENV === 'test') {
    isLoggedIn = true;
  } else {
    isLoggedIn = req.session.hasOwnProperty('user') && req.session.user.uuid.length > 0;
  }

  if (isLoggedIn) {
    return next();
  } else {
    res.status(500).json({message: 'not logged in'});
  }
};