'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import Translate         from '../../../i18n/translate-tag.jsx';
import StopCitizensOnly  from './stop-citizens-only.jsx';

const VoterIntro = (props) => {
  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly />

      <Translate tag='h2'>
        { translations.votingRegistration.introductionPage.pagePrompt }
      </Translate>

      <Translate tag='p'>
        { translations.votingRegistration.introductionPage.explanation }
      </Translate>

      <Translate tag='p'>
        { translations.votingRegistration.introductionPage.timeItWillTake }
      </Translate>
    </div>
  );
};


export default VoterIntro;
