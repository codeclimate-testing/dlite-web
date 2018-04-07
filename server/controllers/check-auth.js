'use strict';

module.exports = function checkAuth(req, res, next, env = process.env.APP_ENV) {
  let isLoggedIn;

  if (env === 'development' || env === 'test') {
    isLoggedIn = true;
  } else {
    isLoggedIn = req.session.hasOwnProperty('user') && req.session.user.uuid.length > 0;
  }

  if (isLoggedIn) {
    next();
  } else {
    res.status(401).json({message: 'not logged in'});
  }
};