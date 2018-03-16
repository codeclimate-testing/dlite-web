'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import Translation       from '../../../i18n/translate-tag.jsx';

const PreRegVoterRegComplete = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='voter-reg-complete'>
        <Translation tag='h4'>
          {translations[locale].votingRegistration.confirmation.pagePrompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].votingRegistration.confirmation.explanation}
        </Translation>
    </div>
  );
};

export default PreRegVoterRegComplete;
