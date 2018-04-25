'use strict';

module.exports.createDateString = function createDateString(date) {
  return date.month + '/' + date.day + '/' + date.year;
};

module.exports.formatCompletedAtDate = function formatCompletedAtDate(date) {
  let month = date.getMonth() + 1;
  return date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}

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

module.exports.buildName = function buildName(app) {
  return `${app.first_name} ${app.last_name} ${app.suffix_name}`;
}

module.exports.sameAddress = function sameAddress(home_address, mailing_address) {
  let answer = '';
  if (home_address.street_address_1.length > 0) {
    home_address.type = '';
    mailing_address.type = '';
    answer = JSON.stringify(home_address) === JSON.stringify(mailing_address) ? 'Yes' : 'No';
  }
  return answer;
};
