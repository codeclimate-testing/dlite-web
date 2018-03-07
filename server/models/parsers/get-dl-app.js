'use strict';
const parserHelper          = require('./data-parser');
const getCardInfo           = require('./get-current-card-info');

function getDLApp(cards, card_options, card_histories, license_classes) {
  let DLApp = {
    isApplying:               false,
    action:                   '',
    licenseType:              getLicenseType(license_classes),
    currentCard:              {},
    replacementDetails:       {
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
  let cardOptions = card_options.filter(option => {
    return option.card_id === DLCard[0].id;
  });

  if (DLCard.length > 0) {
    DLApp.isApplying = true;
    cardOptions.forEach(option => {

      // action
      if (option.option_type === 'action') {
        DLApp.action = option.option_value;
      }

      // real ID
      if (option.option_value === 'real-id') {
        DLApp.realID = 'Yes';
      }

      // card changes and replacements
      if (DLApp.action === 'change'){
        if (option.option_value === 'modification' && option.option_value.split('-')[0] === 'change') {
          let value = option.option_value.split('-');
          DLApp.cardChanges = {
            correctOrUpdate: value[1],
            sections: value[2].split('_'),
            other: value[3]
          }
        }
      } else if (DLApp.action === 'replace') {
        let value = option.option_value.split('-');
        if (option.option_value === 'modification' && value[0] === 'replace') {
          DLApp.replacementDetails = {
            reason: value[1]
          }
        }
      }
    });
  }
  DLApp.currentCard = getCardInfo(card_histories, DLApp.action);
  return DLApp;
};


function getLicenseType(license_classes) {
  let licenseType = {
    type: [],
    needEndorsement: ''
  };
  if(license_classes.length > 0){
    license_classes.forEach(item => {

      if(item.type.startsWith('firefighter')) {
        licenseType.needEndorsement = item.type.split('-')[1];
      } else {
        licenseType.type.push(item.type);
      }

    });
  }
  return licenseType;
}

module.exports = getDLApp;
