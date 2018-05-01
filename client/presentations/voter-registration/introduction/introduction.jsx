'use strict';

import React             from 'react';
import Translator        from '../../../i18n/translator-tag.jsx';
import StopCitizensOnly  from './stop-citizens-only.jsx';

const VoterIntro = (props) => {
  return (
    <div className='voter-intro-info'>
      <StopCitizensOnly {...props}/>

      <Translator
        tag               = 'h2'
        translationPath   = 'votingRegistration.introductionPage.pagePrompt'
      />

      <Translator
        tag               = 'p'
        translationPath   = 'votingRegistration.introductionPage.explanation'
      />

    </div>
  );
};


export default VoterIntro;
