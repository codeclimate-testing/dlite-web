'use strict';

import React            from 'react';
import RadioSelector    from '../../radio-selector.jsx';
import RadioCollection  from '../../radio-selector-collection.jsx';

const OptOutForm = (props) => {
  const values = {
    new       : 'I am a new voter in California',
    existing  : 'I am already registered to vote in California',
    optOut    : 'I am eligible to vote, but do not want to register to vote'
  };

  return (
    <RadioCollection 
      {...props}
      name='optOut'
      text={values}
    >
      <RadioSelector
        value='new'
      />
      <RadioSelector
        value='existing'
      />
      <RadioSelector
        value='optOut'
      />
    </RadioCollection>
  );
};

export default OptOutForm;
