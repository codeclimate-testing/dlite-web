'use strict';
require('newrelic');
const env               = require('./server/config/env.js');

const express           = require('express');
const bodyParser        = require('body-parser');
const passport          = require('passport');
const session           = require('express-session')
const helmet            = require('helmet');
const expressStaticGzip = require("express-static-gzip");
const cookieParser      = require('cookie-parser');

const logging           = require('./server/config/logging');
const sessionOptions    = require('./server/config/session-options');
const oauthStrategy     = require('./server/models/oauth/strategy').strategy;
const oauthSignIn       = require('./server/models/oauth/strategy').strategySignIn;
const oauthSignUp       = require('./server/models/oauth/strategy').strategySignUp;
const serializeUser     = require('./server/models/session/serialize-user');
const deserializeUser   = require('./server/models/session/deserialize-user');
const csrf              = require('./server/config/csrf');
const routes            = require('./server/routes');

let server = express();
server.use(session(sessionOptions));
server.use(passport.initialize());
server.use(passport.session());

passport.use(oauthStrategy);
passport.use(oauthSignIn);
passport.use(oauthSignUp);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

server.use(bodyParser.json());
server.use(cookieParser());
csrf(server);

server.use(logging());
server.use(helmet());

server.get('/', (req, res) => {
  res.redirect('/apply/choose-language');
});
server.use('/', expressStaticGzip('public'));
server.use(express.static('public'));

server.port = env.port;
server.environment = env.env;

server.use('/', routes(passport));

module.exports = server;
