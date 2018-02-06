'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const VoterRegComplete = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='voter-reg-complete'>
      {convertToHtml('h4', translations.votingRegistration.confirmation.pagePrompt)}
      {convertToHtml('p', translations.votingRegistration.confirmation.explanation)}
    </div>
  );
};

export default VoterRegComplete;
