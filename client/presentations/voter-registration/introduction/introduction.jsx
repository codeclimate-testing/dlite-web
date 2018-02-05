'use strict';

import React            from 'react';
import translations     from '../../../i18n';

const VoterIntro = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-intro-info'>
      <h5><img src='/images/stop.png' alt='Stop' /> {translations.votingRegistration.introductionPage.citizenOnlyDisclaimer} </h5>
      <h2 className='question'>{translations.votingRegistration.introductionPage.pagePrompt}</h2>
      <p>{translations.votingRegistration.introductionPage.explanation}</p>

      <hr />

      <p>{translations.votingRegistration.introductionPage.timeItWillTake}</p>

    </div>
  );
};


export default VoterIntro;
