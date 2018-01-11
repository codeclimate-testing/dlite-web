'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  let values = {
    Yes : 'Yes',
    No  : 'No'
  };

  return (
    <div className='interstitial-address-form'>
      <hr/>
      <h2 className='question'>Do you receive mail at this address too?</h2>
      <p>The DMV will print your Mailing Address on your Driver License</p>
        <div className='input-container'>
          <RadioCollection 
            {...props}
            name='homeAddressSameAsMailing'
            text={values}
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

export default Form;
