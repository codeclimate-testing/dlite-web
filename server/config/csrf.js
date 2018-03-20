'use strict';
const csrf          = require('csurf');
const cookieParser  = require('cookie-parser');

function check(req, res, next) {
  res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: 'Strict', httpOnly: true});
  next();
};

module.exports = function(app) {
  app.use(cookieParser());
  app.use(csrf({ cookie: true, value: (req) => (req.cookies.csrfToken) }));
  app.use(check)
};