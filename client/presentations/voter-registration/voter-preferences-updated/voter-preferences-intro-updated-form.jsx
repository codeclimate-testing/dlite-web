'use strict';

import React            from 'react';
import Translator       from '../../../i18n/translator-tag.jsx';

const VoterPreferencesIntroUpdated = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='updating-voter-preferences'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'votingRegistration.preferencesUpdateIntroPage.pagePrompt'
      />

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.preferencesUpdateIntroPage.explanation'
      />
      <Translator
        tag             = 'h4'
        translationPath = 'votingRegistration.preferencesIntroPage.partyHeadline'
      />

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.preferencesIntroPage.partyExplanation'
      />

      <Translator
        tag             = 'h4'
        translationPath = 'votingRegistration.preferencesIntroPage.byMailHeadline'
      />

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.preferencesIntroPage.byMailExplanation'
      />

      <Translator
        tag             = 'h4'
        translationPath = 'votingRegistration.preferencesIntroPage.languageHeadline'
      />

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.preferencesIntroPage.languageExplanation'
      />
      <Translator
        tag             = 'h4'
        translationPath = 'votingRegistration.preferencesIntroPage.contactInfoHeadline'
      />

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.preferencesIntroPage.contactInfoExplanation'
      />
    </div>
    );
};

export default VoterPreferencesIntroUpdated;
