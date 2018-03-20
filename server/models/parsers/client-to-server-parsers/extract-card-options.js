'use strict';
const buildCardOptions      = require('./build-card-options');
const cardTypeParser        = require('../card-type');


function extractCardOptions(data) {
  let cardOptions = [ ];

  if (cardTypeParser.isIDDLApp(data)) {
    if (cardTypeParser.hasDL(data.DLApp)) {
      cardOptions = buildCardOptions('DL', data.DLApp, data.DLApp.action, cardOptions);
    }

    if (cardTypeParser.hasID(data.IDApp)) {
      cardOptions = buildCardOptions('ID', data.IDApp, data.IDApp.action, cardOptions);
    }
  }
  else {
    cardOptions = buildCardOptions('CDL', data, data.cardAction, cardOptions);
  }

  return cardOptions;
};

module.exports = extractCardOptions;
