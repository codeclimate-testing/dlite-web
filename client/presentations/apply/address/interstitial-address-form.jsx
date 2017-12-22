'use strict';

import React from 'react';

import SelectorCollection     from '../../selector-collection.jsx';

const Form = (props) => {
  return (
    <div className='interstitial-address-form'>
      <h4>Do you receive mail at this address too?</h4>
      <h5>The DMV will print your Mailing Address on your Driver License</h5>
        <div className='input-container'>
          <SelectorCollection
            name          = 'homeAddressSameAsMailing'
            values        = { ['Yes', 'No'] }
            onChange      = { props.onChange }
            selectedValue = { props.selectedValue }
          />
        </div>
    </div>
  );
};

export default Form;
