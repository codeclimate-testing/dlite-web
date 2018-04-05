'use strict';
const parserHelper          = require('../data-parser');

function getDLInfo(card_histories, action) {

  let currentDLInfo = {
    number: '',
    issuedBy: '',
    month: '',
    day: '',
    year: '',
    isIssued: 'No'
  };

  if(action === 'new'){
    let card = card_histories[0];
    if (card) {
      let _date = parserHelper.createDateJson(card.date_description);
      currentDLInfo = {
        number:   card.number,
        month:    _date.month,
        day:      _date.day,
        year:     _date.year,
        isIssued: 'Yes',
        issuedBy: card.issuing_entity
      }
    }
  }
  return currentDLInfo;
};

module.exports = getDLInfo;