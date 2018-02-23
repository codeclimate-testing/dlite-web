'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import StopCitizensOnly       from './stop-citizens-only.jsx';

const VoterIntroPrereg = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly />

      {convertToHtml('h2', translations.votingRegistration.introductionPage.pagePrompt, 'question')}
      {convertToHtml('p', translations.votingRegistration.introductionPage.explanation)}

      <hr />

      {convertToHtml('p', translations.votingRegistration.introductionPage.timeItWillTake)}
    </div>
  );
};


export default VoterIntroPrereg;
