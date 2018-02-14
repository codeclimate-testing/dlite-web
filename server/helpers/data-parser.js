'use strict';

module.exports.createDateString = function createDateString(date) {
  if(date.month && date.day && date.year) {
    return date.month + '/' + date.day + '/' + date.year;
  }
  return null;
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

  if (obj.politicalPartyChoose === 'Other' && obj.otherParty.length > 0) {
    party = obj.otherParty;
  }
  return party;
};

function strToBool(val) {
  // add ability to store a non-answer
  return val === 'Yes' ? true : val === 'No' ? false : val;
};

module.exports.boolToStr = function boolToStr(val) {
  return val.toString() === 'true' ? 'Yes' : val.toString() === 'false' ? 'No' : val;
};

module.exports.blankIsDecline = function blankIsDecline(val) {
  return val === '' ? 'decline' : strToBool(val);
};

module.exports.strToBool = strToBool;
