'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';

const AddressTemplate = (props) => {
  const type = props.type;

  const valueFor = (key) => {
    key = key.replace(/^[a-z]/, (char) => {
      return char.toUpperCase();
    });
    return props.payload[`${type}${key}`]
  };

  return (
    <div className='addresses-section'>
      <form onSubmit={props.onSubmit}>

        <TextInput
          type={ type }
          identifier='street'
          description='Street address'
          value={ valueFor('street') }
          onChange={props.onChange}
        />

        <TextInput
          type={ type }
          identifier='city'
          description='City'
          value={ valueFor('city') }
          onChange={props.onChange}
        />

        <StateSelector
          type={ type }
          identifier='state'
          value={ valueFor('state') }
          onChange={props.onChange}
        />

        <TextInput
          type={ type }
          identifier='zip'
          description='Zipcode'
          value={ valueFor('zip') }
          onChange={props.onChange}
        />

        <input type="submit" name="submitAddress" value="Submit" />
      </form>
    </div>
  );
}

export default AddressTemplate;
