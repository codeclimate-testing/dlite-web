'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';

const AddressTemplate = (props) => {
  return (
    <div className='addresses-section'>
      <form onSubmit={props.onSubmit}>

        <TextInput
          type={ props.type }
          identifier={`${props.type}Street`}
          description='Street address'
          value={ props.payload[`${props.type}Street`]}
          onChange={props.onChange}
        />

        <TextInput
          type={ props.type }
          identifier={`${props.type}City`}
          description='City'
          value={ props.payload[`${props.type}City`]}
          onChange={props.onChange}
        />

        <StateSelector
          type={ props.type }
          identifier={`${props.type}State`}
          value={ props.payload[`${props.type}State`]}
          onChange={props.onChange}
        />

        <TextInput
          type={ props.type }
          identifier={`${props.type}Zip`}
          description='Zipcode'
          value={ props.payload[`${props.type}Zip`]}
          onChange={props.onChange}
        />

        <input type="submit" name="submitAddress" value="Submit" />
      </form>
    </div>
  );
}

export default AddressTemplate;