'use strict';

const router            = require('express').Router();
const controllers       = require('./controllers');

const routes = (passport) => {


  router.get( '/api/application/:id',   controllers.getApplication);
  router.post('/api/application',       controllers.postApplication);
  router.get('/api/translation/:code',  controllers.getTranslation);

  router.get( '/auth/new',              controllers.authNew(passport));
  router.get( '/auth/oauth/callback',   controllers.authCallback(passport),
                                        controllers.authSuccess);
  router.get( '/auth/error',            controllers.authError);

  router.get( '/apply/cdl/log-out',            controllers.logout('cdl'));
  router.get( '/apply/id-and-license/log-out', controllers.logout('id-and-license'));

  router.get( '*.js',                   (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
  router.get( '/apply*',                controllers.renderClient);
  router.get( '/add*',                  controllers.renderClient);

  return router;
};

module.exports = routes;

