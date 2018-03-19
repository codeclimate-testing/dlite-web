'use strict';

import React                  from 'react';
import Translator             from '../../../i18n/translator-tag.jsx';
import StopCitizensOnly       from './stop-citizens-only.jsx';

const VoterIntroPrereg = (props) => {
  let locale = props.locale;
  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly {...props}/>

      <Translator
        tag               = 'h2'
        translationPath   = 'votingRegistration.preRegIntroductionPage.pagePrompt'
      />

      <Translator
        tag               = 'p'
        translationPath   = 'votingRegistration.preRegIntroductionPage.explanation'
      />

      <Translator
        tag               = 'p'
        translationPath   = 'votingRegistration.introductionPage.timeItWillTake'
      />
    </div>
  );
};

export default VoterIntroPrereg;
