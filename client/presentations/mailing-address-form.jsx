'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';
import CheckBoxInput from './checkbox-input.jsx';

const MailingAddressForm = (props) => {
  return (
    <div className='addresses-section'>

      <CheckBoxInput
        identifier='copyFromResidentialAddress'
        description='Same as residentail address'
        onChange={props.onChange}
      />

      <div className='mailing-address-form'>
        <form name='mailingAddressForm' onSubmit={props.onSubmit}>

          <TextInput
            type='mailing'
            identifier='mailingStreet'
            description='Street address'
            value={props.mailingAddress.mailingStreet}
            onChange={props.onChange}
          />

          <TextInput
            type='mailing'
            identifier='mailingCity'
            description='City'
            value={props.mailingAddress.mailingCity}
            onChange={props.onChange}
          />

          <StateSelector
            type='mailing'
            identifier='mailingState'
            value={props.mailingAddress.mailingState}
            onChange={props.onChange}
          />

          <TextInput
            type='mailing'
            identifier='mailingZip'
            description='Zipcode'
            value={props.mailingAddress.mailingZip}
            onChange={props.onChange}
          />

          <input type="submit" name="submitMailingAddress" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default MailingAddressForm;
