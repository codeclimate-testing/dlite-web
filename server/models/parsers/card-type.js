'use strict';

function hasNewID(cardType) {
  return cardType.new.indexOf('ID') > -1;
}

function hasID(cardType) {
  return (hasNewID(cardType)|| cardType.renew === 'ID');
}

function hasNewDL(cardType) {
  return cardType.new.indexOf('DL') > -1;
}

function hasDL(cardType) {
  return (hasNewDL(cardType) || cardType.renew === 'DL');
}

module.exports = {
  hasNewID,
  hasID,
  hasNewDL,
  hasDL
};