'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';
import translations           from '../../../i18n';

const VoterPreferencesIntro = (props) => {
  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='voter-preferences-intro'>
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


         <NavigationButtons {...props} />
        </div>
      </form>
    </Page>
  );
};

export default VoterPreferencesIntro;
