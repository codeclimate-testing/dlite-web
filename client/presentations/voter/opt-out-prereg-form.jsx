'use strict';

import React from 'react';
import OptOutRadioPage from './opt-out-radio-page.jsx';
import RadioSelector from '../radio-selector.jsx';

const OptOutFormPreReg = (props) => {
  return (
    <OptOutRadioPage
      pageTitle='DMV: License application - Voting pre-registration'
      sectionName='Voting pre-registration'
      {...props}
    >
      <RadioSelector
        value='new'
        text='I would like to pre-register to vote'
      />
      <RadioSelector
        value='existing'
        text='I am already pre-registered to vote in California'
      />
      <RadioSelector
        value='opt-out'
        text='I am eligible to vote, but do not want to pre-register to vote'
      />
    </OptOutRadioPage>
  );
};

export default OptOutFormPreReg;
