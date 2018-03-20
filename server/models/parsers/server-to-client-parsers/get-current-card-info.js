'use strict';
const parserHelper          = require('../data-parser');
const cardHelper            = require('../card-type');

function getCardInfo(card_histories, action) {
  let currentCardInfo = {
    number: '',
    month: '',
    day: '',
    year: ''
  };

  if(cardHelper.needCurrentCardInfo(action)){
    let card = card_histories[card_histories.length - 1];
    let _date = parserHelper.createDateJson(card.date_description);
    return {
      number:   card.number,
      month:    _date.month,
      day:      _date.day,
      year:     _date.year
    }
  }
  return currentCardInfo;
};

module.exports = getCardInfo;