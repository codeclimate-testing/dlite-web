'use strict';

const cardTypeParser        = require('../card-type');
const saveCard              = require('./extract-card');

const getIDDLHistories = (data) => {

  let cardsArray = [];
  let getIDInfo = cardTypeParser.needCurrentCardInfo(data.IDApp.action);
  let getDLInfo = cardTypeParser.needCurrentCardInfo(data.DLApp.action);

  if (cardTypeParser.getNew(data)){
    const history = data.history.licenseAndIdHistory;
    const number = history.DLIDNumber;
    cardsArray = saveCard.previousCards(data.id, history, number, cardsArray);
  }

  if (getDLInfo) {
    const DLCard = data.DLApp.currentCard;
    cardsArray = saveCard.currentCards(data.id, DLCard, cardsArray);
  }

  else if (getIDInfo) {
    const IDCard = data.IDApp.currentCard;
    cardsArray = saveCard.currentCards(data.id, IDCard, cardsArray);
  }

  return cardsArray;
};

module.exports = getIDDLHistories;