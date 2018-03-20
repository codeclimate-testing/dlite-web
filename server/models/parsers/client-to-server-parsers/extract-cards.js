'use strict';
const cardTypeParser        = require('../card-type');

function extractCardTypes(data) {
  let cards = [ ];
  if (cardTypeParser.isIDDLApp(data)) {
    if(cardTypeParser.hasID(data.IDApp)){
      cards.push({
        application_id:   data.id,
        type:             'ID'
      });
    }

    if(cardTypeParser.hasDL(data.DLApp)) {
      cards.push({
        application_id:   data.id,
        type:             'DL'
      })
    }
  }
  else {
    cards.push({
      application_id:     data.id,
      type:               'CDL'
    });
  }


  return cards;
}

module.exports = extractCardTypes;
