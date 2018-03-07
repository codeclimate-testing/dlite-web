'use strict';

const env           = require('./server/config/env.js');

const fs            = require('fs');
const path          = require('path');
const express       = require('express');
const bodyParser    = require('body-parser');
const passport      = require('passport');
const helmet        = require('helmet');
const logging       = require('./server/config/logging');
const csrf          = require('./server/config/csrf');
const routes        = require('./server/routes');
let   server        = express();

server.use(passport.initialize());
server.use(bodyParser.json());
csrf(server);

server.use(logging());
server.use(helmet());
server.use(express.static('public'));

server.port = env.port;
server.environment  = env.env;

server.get('/', (req, res) => {
  res.redirect('/apply/welcome');
});

server.use('/', routes);

module.exports = server;
