'use strict';

const router            = require('express').Router();
const controller        = require('../controllers');

router.get('/application/:id',  controller.getApplication);
router.post('/application',     controller.postApplication);

module.exports = router;
