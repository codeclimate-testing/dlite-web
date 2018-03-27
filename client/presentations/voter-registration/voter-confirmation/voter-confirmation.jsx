'use strict';

import React                  from 'react';
import Translator             from '../../../i18n/translator-tag.jsx';

const VoterRegComplete = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-reg-complete'>
      <Translator tag='h4' translationPath = 'votingRegistration.confirmation.pagePrompt' />
      <Translator tag='p' translationPath = 'votingRegistration.confirmation.explanation' />
    </div>
  );
};

export default VoterRegComplete;
