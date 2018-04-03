'use strict';
const csrf          = require('csurf');

function check(err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') {
    return next(err);
  }
   // handle CSRF token errors here
  res.status(403).send('session has expired or form tampered with')
};

module.exports = function(app) {
  app.use(csrf({ cookie: {sameSite: 'Strict', httpOnly: true}, value: (req) => (req.cookies.csrfToken) }));
  app.use(check);
  app.use(function (req, res, next) {
    res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: 'Strict', httpOnly: true});
    next();
  });
};