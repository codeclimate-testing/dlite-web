'use strict';

import React                from 'react';

import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Question = (props) => {
  return (
    <div className='interstitial-address-form'>
      <hr/>
      <h2 className='question'>Do you receive mail at this address too?</h2>
      <p>The DMV will print your Mailing Address on your Driver License</p>
      <div className='input-container'>
        <RadioCollection
          {...props}
          name          = 'homeAddressSameAsMailing'
          onBlur        = { props.onBlurValidate }
          errorMessage  = { props.validations.homeAddressSameAsMailing()}
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </div>
    </div>
  );
};

export default Question;
