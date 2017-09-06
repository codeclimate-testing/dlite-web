'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';

const AddressTemplate = (props) => {
  const type = props.type;

  return (
    <div className='addresses-section'>
      <form onSubmit={props.onSubmit}>

        <TextInput
          type={ type }
          identifier='street'
          description='Street address'
          value={ props.address['street'] }
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

        <input type="submit" name="submitAddress" value="Submit" />
      </form>
    </div>
  );
}

export default AddressTemplate;
