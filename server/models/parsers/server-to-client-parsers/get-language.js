'use strict';

function language(application, voting_registrations) {
  let ballotLanguage  = '';
  let appLanguage     = application.language;

  if(voting_registrations) {
    ballotLanguage    = voting_registrations.language;
  }
  return {
    ballotLanguage:   ballotLanguage,
    appLanguage:      appLanguage
  };
}

module.exports = language;