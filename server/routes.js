'use strict';

const router            = require('express').Router();
const controllers       = require('./controllers');

router.get( '/apply*',                controllers.renderClient);
router.get( '/add*',                  controllers.renderClient);
router.get( '/api/application/:id',   controllers.getApplication);
router.post('/api/application',       controllers.postApplication);
router.post('/api/translation/:code', controllers.getTranslation);

module.exports = router;

