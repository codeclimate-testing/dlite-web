'use strict';
const parserHelper          = require('../data-parser');

const previousCards = (id, history, number, array) => {
  if(history.isIssued === 'Yes'){
    let dateString = parserHelper.createDateString(history);
    array.push({
      application_id:   id,
      number:           number,
      issuing_entity:   history.issuedBy,
      date_description: dateString,
    });
  } else if (history.isIssued === 'No') {
    array.push({
      application_id:   id,
      number:           '',
      issuing_entity:   'licenseAndIdHistory not issued',
      date_description: ''
    });
  }
  return array;
};

const currentCards = (id, currentCardInfo, array) => {
  let _date = parserHelper.createDateString(currentCardInfo);
  array.push({
    application_id:   id,
    number:           currentCardInfo.number,
    issuing_entity:   '',
    date_description: _date
  });
  return array;
};

module.exports = {
  previousCards,
  currentCards
}