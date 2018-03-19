'use strict';

import React            from 'react';
import Translator       from '../../../i18n/translator-tag.jsx';

const PreRegVoterPreferencesIntro = (props) => {

  if (!props.showIf) { return null; }

  return (
    <div className='voter-preferences-intro'>
      <span tag='h2' className='question translation-missing'>
        Next we'd like to make sure your voter pre-registration is up to date.
      </span>

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.preferencesIntroPage.explanation'
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

export default PreRegVoterPreferencesIntro;
