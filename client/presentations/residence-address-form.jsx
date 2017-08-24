'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';
import AddressTemplate from './address-template-form.jsx';

const ResidenceAddressForm = (props) => {

  return (
    <div className='addresses-section'>

      <div className='residential-address-form'>

        <h3> Residential Address: </h3>
        <AddressTemplate
          type='residential'
          payload={ props.residenceAddress }
          onChange={ props.onChange }
          onSubmit={ props.onSubmit }
          />

      </div>
    </div>
  )
};

export default ResidenceAddressForm;
