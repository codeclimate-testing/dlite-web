'use strict';

function getNew(cardType) {
  return cardType.ID.action === 'new' || cardType.DL.action === 'new';
};

function getReplace(cardType) {
  return cardType.ID.action === 'replace' || cardType.DL.action === 'replace';
};

function getChange(cardType){
  return cardType.ID.action === 'change' || cardType.DL.action === 'change';
};

function getRenew(cardType){
  return cardType.ID.action === 'renew' || cardType.DL.action === 'renew';
};

function needCurrentCardInfo(cardType){
  return getReplace(cardType) || getChange(cardType) || getRenew(cardType);
};

function hasNewID(cardType) {
  return hasID(cardType) && getNew(cardType)
}

function hasID(cardType) {
  return cardType.IDDL.indexOf('ID') > -1;
}

function hasNewDL(cardType) {
  return hasDL(cardType) && getNew(cardType);
}

function hasDL(cardType) {
  return cardType.IDDL.indexOf('DL') > -1;
}

module.exports = {
  getNew,
  getReplace,
  getChange,
  getRenew,
  needCurrentCardInfo,
  hasNewID,
  hasID,
  hasNewDL,
  hasDL
};

