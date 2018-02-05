'use strict';

import React                  from 'react';
import translations           from '../../../i18n';

const VoterIntroPrereg = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-intro-info'>
      <h5><img src='/images/stop.png' alt='Stop' /> {translations.votingRegistration.preRegIntroductionPage.citizenOnlyDisclaimer} </h5>
      <h2 className='question' key='header'>{translations.votingRegistration.preRegIntroductionPage.pagePrompt}</h2>
      <p>{translations.votingRegistration.preRegIntroductionPage.explanation}</p>

      <hr />

      <p>{translations.votingRegistration.introductionPage.timeItWillTake}</p>
    </div>
  );
};


export default VoterIntroPrereg;
