'use strict';

import React              from 'react';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const PreRegVoterPreferencesIntro = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='voter-preferences-intro'>
      <Translation tag='h2' className='question'>
        Next we'd like to make sure your voter pre-registration is up to date.
      </Translation>

      <Translation tag='p'>
        {translations[locale].votingRegistration.preferencesIntroPage.explanation}
      </Translation>
      <Translation tag='h4'>
        {translations[locale].votingRegistration.preferencesIntroPage.partyHeadline}
      </Translation>

      <Translation tag='p'>
        {translations[locale].votingRegistration.preferencesIntroPage.partyExplanation}
      </Translation>
      <Translation tag='h4'>
        {translations[locale].votingRegistration.preferencesIntroPage.byMailHeadline}
      </Translation>

      <Translation tag='p'>
        {translations[locale].votingRegistration.preferencesIntroPage.byMailExplanation}
      </Translation>
      <Translation tag='h4'>
        {translations[locale].votingRegistration.preferencesIntroPage.languageHeadline}
      </Translation>

      <Translation tag='p'>
        {translations[locale].votingRegistration.preferencesIntroPage.languageExplanation}
      </Translation>
      <Translation tag='h4'>
        {translations[locale].votingRegistration.preferencesIntroPage.contactInfoHeadline}
      </Translation>

      <Translation tag='p'>
        {translations[locale].votingRegistration.preferencesIntroPage.contactInfoExplanation}
      </Translation>
    </div>
  );
};

export default PreRegVoterPreferencesIntro;
