'use strict';
const csrf          = require('csurf');
const cookieParser  = require('cookie-parser');

function check(req, res, next) {
  // console.log(req)
  // send the cookie secret and csrfToken. Because httpOnly is true, the client JS can't access the csrfToken
  res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: 'Strict', httpOnly: true}); 
  next();
};

module.exports = function(app) {
  app.use(cookieParser());
  app.use(csrf({ cookie: true, value: (req) => (req.cookies.csrfToken) }));
  app.use(check)
};