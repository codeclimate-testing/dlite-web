'use strict';

import React from 'react';

import StateSelector    from '../../state-selector.jsx';
import TextInput        from '../../text-input.jsx';
import AddressTemplate  from '../../address-template.jsx';

const Form = (props) => {
  return (
    <div className='home-address-form'>
      <h2 className='question'>Where do you live?</h2>
      <p>For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017</p>
      <div className='addresses-section'>
        <AddressTemplate
          type      = 'home'
          address   = { props.homeAddress }
          onChange  = { props.onChange }
        />
      </div>
    </div>
  );
};

export default Form;
