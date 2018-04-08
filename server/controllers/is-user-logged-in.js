'use strict';

module.exports = function isUserLoggedIn(req, res, next, env = process.env.APP_ENV) {

  let isLoggedIn;

  if (env === 'development' || env === 'test') {
    isLoggedIn = true;
  } else {
    isLoggedIn = req.session.hasOwnProperty('user') && req.session.user.uuid.length > 0;
  }

  if (isLoggedIn) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
};