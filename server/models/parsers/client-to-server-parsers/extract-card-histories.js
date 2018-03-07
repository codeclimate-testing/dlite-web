'use strict';

const cardTypeParser        = require('../card-type');
const parserHelper          = require('../data-parser');

function extractCardHistories(data) {
  let cardHistories = [];
  let getIDInfo = cardTypeParser.needCurrentCardInfo(data.IDApp.action);
  let getDLInfo = cardTypeParser.needCurrentCardInfo(data.DLApp.action);

  if (cardTypeParser.hasNewDL(data.DLApp)){
    if(data.history.licenseAndIdHistory.isIssued === 'Yes'){
      let dateString = parserHelper.createDateString(data.history.licenseAndIdHistory);
      cardHistories.push({
        application_id:   data.id,
        number:           data.history.licenseAndIdHistory.DLIDNumber,
        issuing_entity:   data.history.licenseAndIdHistory.issuedBy,
        date_description: dateString,
      });
    } else if (data.history.licenseAndIdHistory.isIssued === 'No') {
      cardHistories.push({
        application_id:   data.id,
        number:           '',
        issuing_entity:   'licenseAndIdHistory not issued',
        date_description: ''
      });
    }
  } else if (getDLInfo) {
    let _date = parserHelper.createDateString(data.DLApp.currentCard);
    cardHistories.push({
      application_id:   data.id,
      number:           data.DLApp.currentCard.number,
      issuing_entity:   '',
      date_description: _date
    });
  }

  if (getIDInfo) {
    let _date = parserHelper.createDateString(data.IDApp.currentCard);
    cardHistories.push({
      application_id:   data.id,
      number:           data.IDApp.currentCard.number,
      issuing_entity:   '',
      date_description: _date
    });
  }

  return cardHistories;
}

module.exports = extractCardHistories;
