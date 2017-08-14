'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';

const AddressesForm = (props) => {
  return (
    <div className='addresses-section'>
      <Link to='/'>Back to application</Link>

      <div className='residential-address-form'>
        <form onSubmit={props.onSubmit}>
          <TextInput type='residential' identifier='street' description='Street address'/>
          <TextInput type='residential' identifier='city' description='City'/>
          <StateSelector type='residential'/>
          <TextInput type='residential' identifier='zip' description='Zipcode'/>
          <input type="submit" name="submitResidentialAddress" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default AddressesForm;
