'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';

const AddressTemplate = (props) => {
  const type = props.type;

  return (
    <div className='addresses-section'>
      <TextInput
        type={ type }
        identifier='street_1'
        description='Street address'
        value={ props.address['street_1'] }
        onChange={props.onChange}
      />

      <TextInput
      type={ type }
      identifier='street_2'
      description='Apartment or Unit Number (optional)'
      value={ props.address['street_2'] }
      onChange={props.onChange}
    />

      <TextInput
        type={ type }
        identifier='city'
        description='City'
        value={ props.address['city'] }
        onChange={props.onChange}
      />

      <StateSelector
        type={ type }
        identifier='state'
        value={ props.address['state'] }
        onChange={props.onChange}
      />

      <TextInput
        type={ type }
        identifier='zip'
        description='Zipcode'
        value={ props.address['zip'] }
        onChange={props.onChange}
      />
    </div>
  );
}

export default AddressTemplate;
