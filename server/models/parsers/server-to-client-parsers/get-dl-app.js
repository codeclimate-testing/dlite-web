'use strict';
const cardTypeParser        = require('../card-type');
const getCardInfo           = require('./get-current-card-info');
const getCardChange         = require('./get-card-change');
const getCardReplacement    = require('./get-card-replacement');
const getLicenseType        = require('./get-license-type');

function DLApp(cards, card_options, card_histories, license_classes) {
  let DLAppObject = {
    isApplying:               false,
    action:                   '',
    licenseType:              getLicenseType(license_classes),
    currentCard:              {},
    cardReplacement:       {
      reason: ''
    },
    cardChanges:              {
      correctOrUpdate: '',
      sections: [],
      other: ''
    },
    realID: ''
  };

  let DLCard = cards.filter(card => card.type === 'DL');

  if (DLCard.length > 0) {
    DLAppObject.isApplying = true;

    let cardOptions = card_options.filter(option => {
      return option.card_id === DLCard[0].id;
    });


    cardOptions.forEach(option => {
      // action
      if (option.option_type === 'action') {
        DLAppObject.action = option.option_value;
      }

      // real ID
      if (option.option_value === 'real-id') {
        DLAppObject.realID = 'Yes';
      }

      // card changes and replacements
      if (cardTypeParser.changeOption(option)) {
        DLAppObject.cardChanges = getCardChange(option);
      } else if (cardTypeParser.replaceOption(option)) {
        DLAppObject.cardReplacement   = getCardReplacement(option);
      }

    });
  }
  DLAppObject.currentCard = getCardInfo(card_histories, DLAppObject.action);
  return DLAppObject;
};


module.exports = DLApp;