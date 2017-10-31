'use strict';

const router      = require('express').Router();
const ctrl  = require('../controllers');

router.get('/application/:id', ctrl.getApplication);
router.post('/application', ctrl.createApplication);

module.exports = router;
