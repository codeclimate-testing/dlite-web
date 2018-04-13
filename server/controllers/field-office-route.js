'use strict';
const uuidv1 = require('uuid/v1');

module.exports = function authSuccess (req, res, next) {

  if(!process.env.TST_ENV || process.env.TST_ENV !== 'true' ) {
    res.redirect(`/apply`);
  }
  let appName = req.params.appName;
  let language = req.params.language;

  //Create New user object for each request
  req.user = {uuid: uuidv1()}
  req.session.user = req.user;

  res.cookie('appName', appName, {maxAge: 1200000});
  res.cookie('language',language, {maxAge: 1200000});

  if (process.env === 'development' && !process.env.APP_URL.match(/herokuapp/g)) {
    res.redirect(`http://localhost:3000/apply/logged-in/${req.user.uuid}`);
  }
  else {
    res.redirect(`/apply/logged-in/${req.user.uuid}`);
  }
};
