'use strict';
const cardTypeParser      = require('../card-type');
const getCardInfo         = require('./get-current-card-info');
const getCardChange       = require('./get-card-change');
const getCardReplacement  = require('./get-card-replacement');

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
    cardReplacement: {
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

  if (IDCard.length > 0) {
    IDAppObject.isApplying = true;
    let cardOptions = card_options.filter(option => {
      return option.card_id === IDCard[0].id;
    });

    cardOptions.forEach(option => {
      // action
      if (option.option_type === 'action') {
        IDAppObject.action = option.option_value;
      }

      // reduced fee
      if(option.option_value === 'reduced-fee') {
        IDAppObject.reducedFee.ID = 'Yes';
        IDAppObject.reducedFee.form = 'Yes';
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
      if (cardTypeParser.changeOption(option)) {
        IDAppObject.cardChanges = getCardChange(option);
      } else if (cardTypeParser.replaceOption(option)) {
        IDAppObject.cardReplacement = getCardReplacement(option);
      }

    });
  }
  IDAppObject.currentCard = getCardInfo(card_histories, IDAppObject.action);
  return IDAppObject;
};

module.exports = IDApp;