'use strict';

const env         = require('./server/config/env.js');

const fs          = require('fs');
const path        = require('path');
const express     = require('express');
const bodyParser  = require('body-parser');
const passport    = require('passport');
const helmet      = require('helmet');
const jwtStrategy = require('./server/config/jwt-strategy').strategy;
const logging = require('./server/config/logging');

const layout      = fs.readFileSync(path.resolve(__dirname, 'server/templates/layout.html')).toString();
let   server      = express();

passport.use(jwtStrategy);
server.use(passport.initialize());
server.use(bodyParser.json());
server.use(logging());
server.use(helmet());

server.port = env.port;
server.environment  = env.env;

server.use(express.static('public'));
server.get('/', (req, res) => {
  res.send(layout);
});

let authenticate = passport.authenticate('jwt', { session: false });

server.get('/protected', authenticate, function(req, res){
  res.json({hello: 'protected world'});
});

module.exports = server;
