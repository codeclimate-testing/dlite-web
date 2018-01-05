'use strict';

import React            from 'react';
import RadioSelector    from '../../radio-selector.jsx';
import RadioCollection  from '../../radio-selector-collection.jsx';

const values = {
  new       : 'I would like to pre-register to vote',
  existing  : 'I am already pre-registered to vote in California',
  optOut    : 'I am eligible to vote, but do not want to pre-register to vote'
};

const PreRegOptOutFormPreReg = (props) => {
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

export default PreRegOptOutFormPreReg;
