'use strict';

module.exports.createDateString = function createDateString(date) {
  return date.month + '/' + date.day + '/' + date.year;
};

module.exports.createDateJson = function createDateJson(date) {
  let dateArr = date.split('/');
  if(dateArr.length === 3){
    return {
      month:  dateArr[0],
      day:    dateArr[1],
      year:   dateArr[2]
    }
  }
  else{
    return {
      month:  '',
      day:    '',
      year:   ''
    }
  }
};

module.exports.parseParty = function parseParty(obj) {
  let party = obj.politicalPartyChoose;

  if (obj.politicalPartyChoose.toLowerCase() === 'other' && obj.otherParty.length > 0) {
    party = obj.otherParty;
  }
  return party;
};

function strToBool(val) {
  if (val === 'Yes') { return true; }
  if (val === 'No') { return false; }
  return null;
};

module.exports.boolToStr = function boolToStr(val) {
  let key = '';
  if (val !== null) {
    key = val.toString() === 'true' ? 'Yes' : 'No';
  }
  return key;
};

module.exports.expectLicenseAndIdHistory = function expectLicenseAndIdHistory(DLApp, IDApp) {
  return DLApp.action === 'new' || IDApp.action === 'new';
}

module.exports.strToBool = strToBool;
