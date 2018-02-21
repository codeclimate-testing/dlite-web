'use strict';
const cardTypeParser        = require('../../../helpers/card-type');

function extractCardTypes(data) {
  let cards = [ ];
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

  return cards;
}

module.exports = extractCardTypes;