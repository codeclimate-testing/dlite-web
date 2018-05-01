'use strict';
require('newrelic');
const env               = require('./server/config/env.js');

const express           = require('express');
const bodyParser        = require('body-parser');
const passport          = require('passport');
const helmet            = require('helmet');
const expressStaticGzip = require("express-static-gzip");
const cookieParser      = require('cookie-parser');

const logging           = require('./server/config/logging');
const sessionOptions    = require('./server/config/session-options');
const oauthStrategies   = require('./server/models/oauth/strategy')
const serializeUser     = require('./server/models/session/serialize-user');
const deserializeUser   = require('./server/models/session/deserialize-user');
const csrf              = require('./server/config/csrf');
const routes            = require('./server/routes');

let server = express();


server.set('trust proxy', 1) // trust first proxy

server.use(sessionOptions);
server.use(passport.initialize());
server.use(passport.session());
passport.use(oauthStrategies.strategy);
passport.use(oauthStrategies.strategySignInEn);
passport.use(oauthStrategies.strategySignUpEn);
passport.use(oauthStrategies.strategySignInEs);
passport.use(oauthStrategies.strategySignUpEs);
passport.use(oauthStrategies.strategySignInHi);
passport.use(oauthStrategies.strategySignUpHi);
passport.use(oauthStrategies.strategySignInJa);
passport.use(oauthStrategies.strategySignUpJa);
passport.use(oauthStrategies.strategySignInKm);
passport.use(oauthStrategies.strategySignUpKm);
passport.use(oauthStrategies.strategySignInKo);
passport.use(oauthStrategies.strategySignUpKo);
passport.use(oauthStrategies.strategySignInTh);
passport.use(oauthStrategies.strategySignUpTh);
passport.use(oauthStrategies.strategySignInTl);
passport.use(oauthStrategies.strategySignUpTl);
passport.use(oauthStrategies.strategySignInVi);
passport.use(oauthStrategies.strategySignUpVi);
passport.use(oauthStrategies.strategySignInZh);
passport.use(oauthStrategies.strategySignUpZh);
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

// server.use((req, res, next) => {
//   if (!req.session) {
//     return next(new Error('session does not exist'));
//   }
//   next();
// });

server.port = env.port;
server.environment = env.env;

server.use('/', routes(passport));

module.exports = server;