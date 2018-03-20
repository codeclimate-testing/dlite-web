'use strict';

const cardTypeParser            = require('../card-type');
const saveCard                  = require('./extract-card');

const getCDLHistories = (data) => {

  let cardsArray = [];

  if (cardTypeParser.hasNewCDL(data)) {
    const history = data.history.currentDLInfo;
    const number = history.number;
    cardsArray = saveCard.previousCards(data.id, history, number, cardsArray);
  }

  else if (cardTypeParser.needCurrentCardInfo(data.cardAction)) {
    const CDLCard = data.currentCardInfo;
    cardsArray = saveCard.currentCards(data.id, CDLCard, cardsArray);
  }

  return cardsArray;
};

module.exports = getCDLHistories;