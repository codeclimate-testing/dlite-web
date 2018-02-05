'use strict';

import React            from 'react';
import translations     from '../../../i18n';

const PreRegVoterRegComplete = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-reg-complete'>
      <h4>{translations.votingRegistration.confirmation.pagePrompt}</h4>

      <p>{translations.votingRegistration.confirmation.explanation}</p>

    </div>

  );
};

export default PreRegVoterRegComplete;
