'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';
import alicePath from '../helpers/alice-path';

const ResidenceAddressForm = (props) => {
  return (
    <div className='addresses-section'>
      <Link to={ alicePath('/') }>Back to application</Link>

      <div className='residential-address-form'>
        <form onSubmit={props.onSubmit}>
          <TextInput
            type='residential'
            identifier='street'
            description='Street address'
            value={props.residenceAddress.street}
            onChange={props.onChange}
          />

          <TextInput
            type='residential'
            identifier='city'
            description='City'
            value={props.residenceAddress.city}
            onChange={props.onChange}
          />

          <StateSelector
            type='residential'
            value={props.residenceAddress.state}
            onChange={props.onChange}
          />

          <TextInput
            type='residential'
            identifier='zip'
            description='Zipcode'
            value={props.residenceAddress.zip}
            onChange={props.onChange}
          />

          <input type="submit" name="submitResidentialAddress" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default ResidenceAddressForm;
