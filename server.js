'use strict';

const env           = require('./server/config/env.js');

const fs            = require('fs');
const path          = require('path');
const express       = require('express');
const bodyParser    = require('body-parser');
const passport      = require('passport');
const helmet        = require('helmet');
const jwtStrategy   = require('./server/config/jwt-strategy').strategy;
const logging       = require('./server/config/logging');
const api           = require('./server/api');
const csrf          = require('csurf');
const cookieParser  = require('cookie-parser');

const layout        = fs.readFileSync(path.resolve(__dirname, 'server/templates/layout.html')).toString();
let   server        = express();

passport.use(jwtStrategy);
server.use(passport.initialize());
server.use(bodyParser.json());
server.use(cookieParser());
server.use(csrf({ cookie: true, value: (req) => (req.cookies.csrfToken) }));
server.use(logging());
server.use(helmet());

server.port = env.port;
server.environment  = env.env;

server.use(function (req, res, next) {
  // send the cookie secret and csrfToken. Because httpOnly is true, the client JS can't access the csrfToken
  res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: 'Strict', httpOnly: true, secure: true }); 
  next();
});

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.redirect('/apply/my-basics/legal-name');
});

server.get('/apply*', (req, res) => {
  res.send(layout);
});

let authenticate = passport.authenticate('jwt', { session: false });

server.get('/protected', authenticate, function(req, res){
  res.json({hello: 'protected world'});
});

server.use('/api', api);

module.exports = server;
