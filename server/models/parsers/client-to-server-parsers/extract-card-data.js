'use strict';
const isIDDLApp               = require('../card-type').isIDDLApp;
const getIDDLHistories        = require('./iddl-histories');
const getCDLHistories         = require('./cdl-histories');

function extractCardData(data) {
  if (isIDDLApp(data)) {
    return getIDDLHistories(data);
  } else {
    return getCDLHistories(data);
  }
}

module.exports = extractCardData;
