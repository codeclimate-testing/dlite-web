'use strict';

module.exports.createDateString = function createDateString(date) {
  return date.month + '/' + date.day + '/' + date.year;
};

module.exports.createDateJson = function createDateJson(date) {
  let _date = date.split('/');
  return {
    month:  _date[0],
    day:    _date[1],
    year:   _date[2]
  }
};

module.exports.strToBool = function strToBool(val) {
  // add ability to store a non-answer
  return val === 'Yes' ? true : val === 'null' ? null : false;
};

module.exports.boolToStr = function boolToStr(val) {
  return val === null ? 'null' : val ? 'Yes' : 'No';
};
