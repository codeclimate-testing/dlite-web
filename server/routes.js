'use strict';

const router            = require('express').Router();
const controllers       = require('./controllers');

const routes = (passport) => {
  router.get( '/apply*',                controllers.renderClient);
  router.get( '/add*',                  controllers.renderClient);

  router.get( '/api/application/:id',   controllers.getApplication);
  router.post('/api/application',       controllers.postApplication);
  router.post('/api/translation/:code', controllers.getTranslation);

  router.get( '/auth/new',              controllers.authNew(passport));
  router.get( '/auth/oauth/callback',   controllers.authCallback(passport),
                                        controllers.authSuccess);
  router.get( '/auth/error',            controllers.authError);
  return router;
};

module.exports = routes;

