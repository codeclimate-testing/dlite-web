'use strict';

import React from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const SignatureChoice = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='signature-choice-form'>
      <h2 className='question'>Because you are under 18, you will need a parent or guardian signature.</h2>
      <p>If you have more than one parent or guardian with custody, both must sign.</p>
      <p>Is your parent/guardian available to sign your application?</p>
      <div className='inner-bottom'>
        <RadioCollection
          {...props}
          name='isSigned'
          text={values}
          onChange={props.onFirstChange}
        >
          <RadioSelector
            value='Yes'
          />
          <RadioSelector
            value='No'
          />
        </RadioCollection>

      </div>
    </div>
  );
};

export default SignatureChoice;
