'use strict';
const parserHelper          = require('../data-parser');


function party(voting_registrations) {
  if(!voting_registrations) {
    return {
      isSelected:             '',
      politicalPartyChoose:   '',
      otherParty:             ''
    };
  }
  const parties = [ "American Independent Party",
    "Libertarian Party",
    "Democratic Party",
    "Green Party",
    "Peace and Freedom Party",
    "Republican Party"
  ];

  let politicalParty = voting_registrations.party;
  let otherParty = '';

  if (voting_registrations.party.length > 0 && !parties.includes(voting_registrations.party)) {
    politicalParty = 'Other';
    otherParty = voting_registrations.party;
  };

  return {
    isSelected:             parserHelper.boolToStr( politicalParty || otherParty ? true : false),
    politicalPartyChoose:   politicalParty,
    otherParty:             otherParty
  };
}

module.exports = party;
