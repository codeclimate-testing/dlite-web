'use strict';

function getNew(data) {
  return data.IDApp.action === 'new' || data.DLApp.action === 'new';
};

function getReplace(action) {
  return action === 'replace';
};

function getChange(action){
  return action === 'change';
};

function getRenew(action){
  return action === 'renew';
};

function needCurrentCardInfo(action){
  return getReplace(action) || getChange(action) || getRenew(action);
};

function hasNewID(IDApp) {
  return hasID(IDApp) && IDApp.action === 'new';
}

function hasID(IDApp) {
  return IDApp.isApplying.toString() === 'true';
}

function hasNewDL(DLApp) {
  return hasDL(DLApp) && DLApp.action === 'new';
}

function hasDL(DLApp) {
  return DLApp.isApplying.toString() === 'true';
}

function hasNewCDL(data) {
  return data.cardAction === 'new';
}

function isIDDLApp(data) {
  return data.hasOwnProperty('IDApp') || data.hasOwnProperty('DLApp');
}

function isCDLApp(data) {
  return !isIDDLApp(data);
}

function isCDLDatabase(data) {
  return data.cards[0].type === 'CDL';
}

function addingMotorcycle(data) {
  return data.classM === 'Yes';
}

function changeOption(option) {
  return option.option_type === 'modification' && option.option_value.split('-')[0] === 'change';
}

function replaceOption(option) {
  return option.option_type === 'modification' && option.option_value.split('-')[0] === 'replace';
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
  hasDL,
  hasNewCDL,
  isIDDLApp,
  isCDLApp,
  isCDLDatabase,
  addingMotorcycle,
  changeOption,
  replaceOption
};

