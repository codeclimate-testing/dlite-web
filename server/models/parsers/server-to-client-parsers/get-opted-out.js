'use strict';
const parserHelper          = require('../data-parser');
const voterChoiceConverter  = require('../voter-choice');

function optedOut(voting_registrations) {

  let opted_out  = '';
  let type       = '';
  if(voting_registrations){
    opted_out  = parserHelper.boolToStr(voting_registrations.opted_out);
    type       = voting_registrations.type;
    return voterChoiceConverter.DBToClientMapping({
      opted_out: opted_out,
      type: type
    });
  }
  return '';
}

module.exports = optedOut;