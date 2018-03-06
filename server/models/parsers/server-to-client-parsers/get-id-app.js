'use strict';
const parserHelper        = require('../data-parser');
const getCardInfo         = require('./get-current-card-info');

function IDApp(cards, card_options, card_histories) {
  let IDAppObject = {
    isApplying:           false,
    action:               '',
    reducedFee:           {
      ID: '',
      form: ''
    },
    seniorID:             '',
    currentCard:          {
    },
    replacementDetails:   {
      reason: ''
    },
    cardChanges: {
      correctOrUpdate: '',
      sections: [],
      other: ''
    },
    realID: ''
  };

  let IDCard = cards.filter(card => card.type === 'ID');
  let cardOptions = card_options.filter(option => {
    return option.card_id === IDCard[0].id;
  });


  if (IDCard.length > 0) {
    IDAppObject.isApplying = true;
    cardOptions.forEach(option => {
      // action
      if (option.option_type === 'action') {
        IDAppObject.action = option.option_value;
      }

      // reduced fee
      if(option.option_value === 'reduced-fee-has-form') {
        IDAppObject.reducedFee.ID = 'Yes';
        IDAppObject.reducedFee.form = 'Yes';
      }
      else if(option.option_value === 'reduced-fee-no-form') {
        IDAppObject.reducedFee.ID = 'Yes';
        IDAppObject.reducedFee.form = 'No';
      }

      // senior id
      if (option.option_value === 'senior-id'){
        IDAppObject.seniorID = 'Yes';
      }

      // real ID
      if (option.option_value === 'real-id') {
        IDAppObject.realID = 'Yes';
      }

      // card changes and replacements
      if (IDAppObject.action === 'change'){
        if (option.option_value === 'modification' && option.option_value.split('-')[0] === 'change') {
          let value = option.option_value.split('-');
          IDAppObject.cardChanges = {
            correctOrUpdate: value[1],
            sections: value[2].split('_'),
            other: value[3]
          }
        }
      } else if (IDAppObject.action === 'replace') {
        let value = option.option_value.split('-');
        if (option.option_value === 'modification' && value[0] === 'replace') {
          IDAppObject.replacementDetails = {
            reason: value[1]
          }
        }
      }
    });
  }
  IDAppObject.currentCard = getCardInfo(card_histories, IDAppObject.action);
  return IDAppObject;
};

module.exports = IDApp;