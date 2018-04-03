'use strict';
const cardTypeParser        = require('../card-type');

const cardAction = (IDApp, DLApp) => {
  let toReturn = '';
  if(cardTypeParser.gettingBothNew(IDApp, DLApp)) {
    toReturn = 'new';
  }
  return toReturn;
};

module.exports = cardAction;