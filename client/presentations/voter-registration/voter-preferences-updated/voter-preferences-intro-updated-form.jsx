'use strict';

import React            from 'react';
import translations     from '../../../i18n';

const VoterPreferencesIntroUpdated = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='updating-voter-preferences'>
      <h2 className='question'>{translations.votingRegistration.preferencesUpdateIntroPage.pagePrompt}</h2>
      <p>{translations.votingRegistration.preferencesUpdateIntroPage.explanation}</p>
      <h4>{translations.votingRegistration.preferencesIntroPage.partyHeadline}</h4>
      <p>{translations.votingRegistration.preferencesIntroPage.partyExplanation}</p>
      <h4>{translations.votingRegistration.preferencesIntroPage.byMailHeadline}</h4>
      <p>{translations.votingRegistration.preferencesIntroPage.byMailExplanation}</p>
      <h4>{translations.votingRegistration.preferencesIntroPage.languageHeadline}</h4>
      <p>{translations.votingRegistration.preferencesIntroPage.languageExplanation}</p>
      <h4>{translations.votingRegistration.preferencesIntroPage.contactInfoHeadline}</h4>
      <p>{translations.votingRegistration.preferencesIntroPage.contactInfoExplanation}</p>
    </div>
  );
};

export default VoterPreferencesIntroUpdated;
