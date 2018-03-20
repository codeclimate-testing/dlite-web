'use strict';
const getCardChange       = require('./get-card-change');
const getCardReplacement  = require('./get-card-replacement');
const cardTypeParser      = require('../card-type');

function CDLApp(cardOptions){
  const cardAction = cardOptions[0].option_value;

  let CDLAppObject = {
    cardAction      : '',
    realID          : '',
    cardChanges     : {
      correctOrUpdate: '',
      sections      : [],
      other         : ''
    },
    cardReplacement : {
      reason        : ''
    }
  };

  cardOptions.forEach(option => {
    // action
    if (option.option_type === 'action') {
      CDLAppObject.cardAction = option.option_value;
    }

    // real ID
    else if (option.option_value === 'real-id') {
      CDLAppObject.realID = 'Yes';
    }


    // card changes and replacements
    else if (cardTypeParser.changeOption(option)) {
      CDLAppObject.cardChanges = getCardChange(option);
    } else if (cardTypeParser.replaceOption(option)) {
      CDLAppObject.cardReplacement = getCardReplacement(option);
    }
  });

  return CDLAppObject;
}

module.exports = CDLApp;