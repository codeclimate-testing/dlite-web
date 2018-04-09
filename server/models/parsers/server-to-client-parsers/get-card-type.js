'use strict';
const cardTypeParser        = require('../card-type');

const getCardType = (IDApp, DLApp) => {
  let toReturn = [];
  if(cardTypeParser.gettingBothNew(IDApp, DLApp)) {
    toReturn = ['ID', 'DL'];
  }
  else if (cardTypeParser.hasDL(DLApp)){
    toReturn = ['DL']
  }
  else {
    toReturn = ['ID'];
  }
  return toReturn;
};

module.exports = getCardType;