'use strict';

import React              from 'react';
import translations       from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const PreRegVoterPreferencesIntro = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-preferences-intro'>
      <h2 className='question translation-missing'>Next we'd like to make sure your voter pre-registration is up to date.</h2>
      {convertToHtml('p', translations.votingRegistration.preferencesUpdateIntroPage.explanation)}
      {convertToHtml('h4', translations.votingRegistration.preferencesIntroPage.partyHeadline)}
      {convertToHtml('p', translations.votingRegistration.preferencesIntroPage.partyExplanation)}
      {convertToHtml('h4', translations.votingRegistration.preferencesIntroPage.byMailHeadline)}
      {convertToHtml('p', translations.votingRegistration.preferencesIntroPage.byMailExplanation)}
      {convertToHtml('h4', translations.votingRegistration.preferencesIntroPage.languageHeadline)}
      {convertToHtml('p', translations.votingRegistration.preferencesIntroPage.languageExplanation)}
      {convertToHtml('h4', translations.votingRegistration.preferencesIntroPage.contactInfoHeadline)}
      {convertToHtml('p', translations.votingRegistration.preferencesIntroPage.contactInfoExplanation)}
    </div>
  );
};

export default PreRegVoterPreferencesIntro;
