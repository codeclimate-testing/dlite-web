'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';
import translations           from '../../../i18n';

const PreRegVoterPreferencesIntroUpdated = (props) => {
  return (
     <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='voter-preferences-intro'>
          <h2 className='question translation-missing'>Next we'd like to make sure your voter pre-registration is up to date.</h2>
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

export default PreRegVoterPreferencesIntroUpdated;
