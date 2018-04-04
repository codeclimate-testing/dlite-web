'use strict';

module.exports = function checkAuth(req, res, next) {

  // check headers here

  let isLoggedIn = req.session.hasOwnProperty('user') && req.session.user.uuid.length > 0;

  if (process.env.APP_ENV === 'development' || process.env.APP_ENV === 'test') {
    isLoggedIn = req.cookies.isLoggedIn === 'true';
  }

  if (isLoggedIn) {
    return next();
  } else {
    return res.status(500).redirect('/');
  }
};