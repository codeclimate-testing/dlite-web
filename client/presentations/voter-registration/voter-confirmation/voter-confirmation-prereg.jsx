'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import { convertToHtml } from '../../../i18n/convert-to-html.jsx';

const PreRegVoterRegComplete = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='voter-reg-complete'>
      {convertToHtml('h4', translations[locale].votingRegistration.confirmation.pagePrompt)}
      {convertToHtml('p', translations[locale].votingRegistration.confirmation.explanation)}
    </div>
  );
};

export default PreRegVoterRegComplete;
