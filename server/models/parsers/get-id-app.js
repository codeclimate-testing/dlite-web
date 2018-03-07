'use strict';
const parserHelper        = require('./data-parser');
const getCardInfo         = require('./get-current-card-info');

function getIDApp(cards, card_options, card_histories) {
  let IDApp = {
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
    IDApp.isApplying = true;
    cardOptions.forEach(option => {
      // action
      if (option.option_type === 'action') {
        IDApp.action = option.option_value;
      }

      // reduced fee
      if(option.option_value === 'reduced-fee-has-form') {
        IDApp.reducedFee.ID = 'Yes';
        IDApp.reducedFee.form = 'Yes';
      }
      else if(option.option_value === 'reduced-fee-no-form') {
        IDApp.reducedFee.ID = 'Yes';
        IDApp.reducedFee.form = 'No';
      }

      // senior id
      if (option.option_value === 'senior-id'){
        IDApp.seniorID = 'Yes';
      }

      // real ID
      if (option.option_value === 'real-id') {
        IDApp.realID = 'Yes';
      }

      // card changes and replacements
      if (IDApp.action === 'change'){
        if (option.option_value === 'modification' && option.option_value.split('-')[0] === 'change') {
          let value = option.option_value.split('-');
          IDApp.cardChanges = {
            correctOrUpdate: value[1],
            sections: value[2].split('_'),
            other: value[3]
          }
        }
      } else if (IDApp.action === 'replace') {
        let value = option.option_value.split('-');
        if (option.option_value === 'modification' && value[0] === 'replace') {
          IDApp.replacementDetails = {
            reason: value[1]
          }
        }
      }
    });
  }
  IDApp.currentCard = getCardInfo(card_histories, IDApp.action);
  return IDApp;
};

module.exports = getIDApp;
