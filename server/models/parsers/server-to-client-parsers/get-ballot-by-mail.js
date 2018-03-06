'use strict';

const parserHelper          = require('..//data-parser');

function ballotByMail(voting_registrations) {
  if(voting_registrations) {
    return parserHelper.boolToStr(voting_registrations.vote_by_mail);
  }
  return '';
}

module.exports = ballotByMail;