'use strict';

const router            = require('express').Router();
const controllers       = require('./controllers');


const routes = (passport) => {

  router.get('/api/health-check', controllers.getHealth);

  router.get( '/api/application/:id', controllers.checkAuth, controllers.getApplication);
  router.post('/api/application', controllers.checkAuth, controllers.postApplication);
  router.get( '/api/translation/:code',controllers.getTranslation);
  router.get( '/api/user/:uuid', controllers.checkAuth, controllers.sameUserOnly, controllers.getUserApps);
  router.get( '/api/isLoggedIn', controllers.isUserLoggedIn);
  router.get( '/api/get-app-env', controllers.sendAppEnv);

  router.get( '/field-office-route/:appName/:language',       controllers.fieldOfficeRoute);

  router.get( '/auth/new/:appName/:language/:oauthType', controllers.authNew(passport));
  router.get( '/auth/oauth/callback', controllers.authCallback(passport), controllers.authSuccess);
  router.get( '/auth/error', controllers.authError);

  router.get( '/apply/log-out', controllers.checkAuth, controllers.logout);
  router.get( '/apply*', controllers.renderClient);
  router.get( '*.js', controllers.sendZip);

  return router;
};

module.exports = routes;

