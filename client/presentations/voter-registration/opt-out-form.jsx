'use strict';

import React from 'react';
import OptOutRadioPage from './opt-out-radio-page.jsx';
import RadioSelector from '../radio-selector.jsx';

const OptOutForm = (props) => {
  return (
    <OptOutRadioPage
      {...props}
      pageTitle='DMV: License application - Voting registration'
      sectionName='Voting registration'
    >
      <RadioSelector
        value='new'
        text='I am a new voter in California'
      />
      <RadioSelector
        value='existing'
        text='I am already registered to vote in California'
      />
      <RadioSelector
        value='opt-out'
        text='I am eligible to vote, but do not want to register to vote'
      />
    </OptOutRadioPage>
  );
};

export default OptOutForm;
