'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';

const generateIdentifier = (name, type) => {
  const upcasedName = name[0].toUpperCase() + name.slice(1);
  return `${type}${upcasedName}`;
};

const AddressTemplate = (props) => {
  return (
    <div className='addresses-section'>
      <TextInput
        name='street_1'
        id={ generateIdentifier('street_1', props.type) }
        description='Street Address'
        value={ props.address['street_1'] }
        onChange={props.onChange}
      />

      <TextInput
        name='street_2'
        id={ generateIdentifier('street_2', props.type) }
        description='Apartment or Unit Number (optional)'
        value={ props.address['street_2'] }
        onChange={props.onChange}
      />

      <TextInput
        name='city'
        id={ generateIdentifier('city', props.type) }
        description='City'
        value={ props.address['city'] }
        onChange={props.onChange}
      />

      <StateSelector
        name='state'
        id={ generateIdentifier('state', props.type) }
        value={ props.address['state'] }
        onChange={props.onChange}
      />

      <TextInput
        name='zip'
        id={ generateIdentifier('zip', props.type) }
        description='Zip Code'
        value={ props.address['zip'] }
        onChange={props.onChange}
      />
    </div>
  );
}

export default AddressTemplate;
