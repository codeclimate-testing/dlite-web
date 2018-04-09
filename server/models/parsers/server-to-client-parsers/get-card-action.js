'use strict';
const cardTypeParser        = require('../card-type');

const cardAction = (IDApp, DLApp) => {
  let toReturn = '';
  if(cardTypeParser.gettingBothNew(IDApp, DLApp)) {
    toReturn = 'new';
  }
  else if (cardTypeParser.hasDL(DLApp)) {
    toReturn = DLApp.action;
  }
  else {
    toReturn = IDApp.action;
  }
  return toReturn;
};

module.exports = cardAction;