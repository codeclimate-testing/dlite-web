'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const PreRegVoterPreferencesIntroUpdated = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='voter-preferences-intro'>
      <h2 className='question translation-missing'>Next we'd like to make sure your voter pre-registration is up to date.</h2>
      {convertToHtml('p', translations[locale].votingRegistration.preferencesUpdateIntroPage.explanation)}
      {convertToHtml('h4', translations[locale].votingRegistration.preferencesIntroPage.partyHeadline)}
      {convertToHtml('p', translations[locale].votingRegistration.preferencesIntroPage.partyExplanation)}
      {convertToHtml('h4', translations[locale].votingRegistration.preferencesIntroPage.byMailHeadline)}
      {convertToHtml('p', translations[locale].votingRegistration.preferencesIntroPage.byMailExplanation)}
      {convertToHtml('h4', translations[locale].votingRegistration.preferencesIntroPage.languageHeadline)}
      {convertToHtml('p', translations[locale].votingRegistration.preferencesIntroPage.languageExplanation)}
      {convertToHtml('h4', translations[locale].votingRegistration.preferencesIntroPage.contactInfoHeadline)}
      {convertToHtml('p', translations[locale].votingRegistration.preferencesIntroPage.contactInfoExplanation)}
    </div>
  );
};

export default PreRegVoterPreferencesIntroUpdated;
