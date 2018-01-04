'use strict';

import React from 'react';
import PreRegOptOutRadioPage from './opt-out-prereg-radio-page.jsx';
import RadioSelector from '../../radio-selector.jsx';

const PreRegOptOutFormPreReg = (props) => {
  return (
    <PreRegOptOutRadioPage
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
    </PreRegOptOutRadioPage>
  );
};

export default PreRegOptOutFormPreReg;
