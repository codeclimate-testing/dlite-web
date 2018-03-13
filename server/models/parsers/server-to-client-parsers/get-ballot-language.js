'use strict';

const parserHelper          = require('..//data-parser');

function ballotLanguage(voting_registrations) {
  if(voting_registrations) {
    return voting_registrations.language;
  }
  return '';
}

module.exports = ballotLanguage;