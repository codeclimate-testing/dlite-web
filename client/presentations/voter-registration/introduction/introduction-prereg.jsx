'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import Translate              from '../../../i18n/translate-tag.jsx';
import StopCitizensOnly       from './stop-citizens-only.jsx';

const VoterIntroPrereg = (props) => {
  let locale = props.locale;
  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly {...props}/>

      <Translate tag='h2'>
        { translations[locale].votingRegistration.preRegIntroductionPage.pagePrompt }
      </Translate>

      <Translate tag='p'>
        { translations[locale].votingRegistration.preRegIntroductionPage.explanation }
      </Translate>

      <Translate tag='p'>
        { translations[locale].votingRegistration.introductionPage.timeItWillTake }
      </Translate>
    </div>
  );
};


export default VoterIntroPrereg;
