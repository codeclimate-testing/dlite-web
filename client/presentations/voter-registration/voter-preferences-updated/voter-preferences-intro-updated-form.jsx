'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const VoterPreferencesIntroUpdated = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='updating-voter-preferences'>
      {convertToHtml('h2', translations.votingRegistration.preferencesUpdateIntroPage.pagePrompt, 'question')}
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

export default VoterPreferencesIntroUpdated;
