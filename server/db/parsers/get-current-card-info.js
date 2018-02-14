'use strict';
const parserHelper          = require('../../helpers/data-parser');
const cardHelper            = require('../../helpers/card-type');

function getCardInfo(card_histories, action) {
  let currentCardInfo = {
    number: '',
    month: '',
    day: '',
    year: ''
  };
  let filteredCard = card_histories.filter(card => {
    return card.issuing_entity.length === 0;
  });

  if(filteredCard && cardHelper.needCurrentCardInfo(action)){
    let _date = parserHelper.createDateJson(filteredCard[0].date_description);
    return {
      number:   filteredCard[0].number,
      month:    _date.month,
      day:      _date.day,
      year:     _date.year
    }
  }
  return currentCardInfo
};

module.exports = getCardInfo;