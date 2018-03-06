'use strict';

function citizenStatus(voting_registrations) {
  if(voting_registrations) {
    return voting_registrations.is_citizen;
  }
  return '';
}

module.exports = citizenStatus;