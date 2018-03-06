'use strict';

function eligibility(voting_registrations) {
  if(voting_registrations) {
    return voting_registrations.is_eligible;
  }
  return '';
}

module.exports = eligibility;