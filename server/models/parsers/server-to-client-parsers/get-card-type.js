'use strict';
const cardTypeParser        = require('../card-type');

const getCardType = (IDApp, DLApp) => {
  let toReturn = [];
  if(cardTypeParser.gettingBothNew(IDApp, DLApp)) {
    toReturn = ['ID', 'DL'];
  }
  else if (cardTypeParser.hasID(IDApp)){
    toReturn = ['ID']
  }
  else {
    toReturn = ['DL']
  }
  return toReturn;
};

module.exports = getCardType;