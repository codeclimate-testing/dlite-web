'use strict';

import React          from 'react';
import translations   from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const VoterPreferencesIntro = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='voter-preferences-intro'>
      {convertToHtml('h2', translations[locale].votingRegistration.preferencesIntroPage.pagePrompt, 'question')}
      {convertToHtml('p', translations[locale].votingRegistration.preferencesUpdateIntroPage.partyExplanation)}
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

export default VoterPreferencesIntro;
