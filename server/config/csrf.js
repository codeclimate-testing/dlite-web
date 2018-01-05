'use strict';

const csrf          = require('csurf');
const cookieParser  = require('cookie-parser');

function cookie(){
  cookieParser();
};

function token(){
  csrf({ cookie: true, value: (req) => (req.cookies.csrfToken) });
};

function check(req, res, next) {
  // send the cookie secret and csrfToken. Because httpOnly is true, the client JS can't access the csrfToken
  res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: 'Strict', httpOnly: true, secure: true }); 
  next();
};

module.exports = [cookie, token, check];
