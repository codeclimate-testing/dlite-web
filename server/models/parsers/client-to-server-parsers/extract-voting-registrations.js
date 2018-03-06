'use strict';
const parserHelper          = require('../data-parser');
const voterChoiceConverter  = require('../voter-choice');

function extractVotingRegistrations(data) {

  if(data.voting.citizenStatus === '' || data.voting.eligibilityRequirements === '' || data.voting.optOut === '') { return null; }
  const voterChoice = voterChoiceConverter.clientToDBMapping(data.voting.optOut);
  return {
    application_id:     data.id,
    is_citizen:         data.voting.citizenStatus,
    is_eligible:        data.voting.eligibilityRequirements,
    type:               voterChoice.type,
    opted_out:          parserHelper.strToBool(voterChoice.opted_out),
    party:              parserHelper.parseParty(data.voting.politicalPartyChoose),
    language:           data.basics.language.ballotLanguage,
    vote_by_mail:       parserHelper.strToBool(data.voting.ballotByMail),
    should_contact:     parserHelper.strToBool(data.voting.contactMethods.shouldContact)
  };
}

module.exports = extractVotingRegistrations;
