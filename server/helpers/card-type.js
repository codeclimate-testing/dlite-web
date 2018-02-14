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

