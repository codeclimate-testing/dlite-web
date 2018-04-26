'use strict';

import React                  from 'react';
import Translator             from '../../../i18n/translator-tag.jsx';
import StopCitizensOnly       from './stop-citizens-only.jsx';

const VoterIntroPrereg = (props) => {

  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly {...props}/>

      <Translator
        tag               = 'h2'
        translationPath   = 'votingRegistration.preRegIntroductionPage.pagePrompt'
        tabIndex          = '0'
      />

      <Translator
        tag               = 'p'
        translationPath   = 'votingRegistration.preRegIntroductionPage.explanation'
        tabIndex          = '0'
      />

    </div>
  );
};

export default VoterIntroPrereg;
