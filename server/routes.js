'use strict';

const router            = require('express').Router();
const controllers       = require('./controllers');


const routes = (passport) => {
  router.get( '/api/application/:id',     controllers.getApplication);
  router.post('/api/application',         controllers.postApplication);
  router.get( '/api/translation/:code',   controllers.getTranslation);

  router.get( '/auth/new/:appName',       controllers.saveAppName,
                                          controllers.authNew(passport));

  router.get( '/auth/oauth/callback',     controllers.authCallback(passport),
                                          controllers.authSuccess);

  router.get( '/auth/error',              controllers.authError);

  router.get( '/apply/log-out',           controllers.logout);

  router.get( '/apply*',                controllers.renderClient);
  router.get( '*.js',                   controllers.sendZip);

  return router;
};

module.exports = routes;

