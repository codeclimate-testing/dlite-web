'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import Translate              from '../../../i18n/translate-tag.jsx';
import StopCitizensOnly       from './stop-citizens-only.jsx';

const VoterIntroPrereg = (props) => {
  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly />

      <Translate tag='h2'>
        { translations.votingRegistration.preRegIntroductionPage.pagePrompt }
      </Translate>

      <Translate tag='p'>
        { translations.votingRegistration.preRegIntroductionPage.explanation }
      </Translate>

      <Translate tag='p'>
        { translations.votingRegistration.introductionPage.timeItWillTake }
      </Translate>
    </div>
  );
};


export default VoterIntroPrereg;
