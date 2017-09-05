'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';
import CheckBoxInput from './checkbox-input.jsx';
import AddressTemplate from './address-template-form.jsx';

const MailingAddressForm = (props) => {
  return (
    <div className='addresses-section'>
      <h3> Mailing Address: </h3>

      <CheckBoxInput
        identifier='copyFromResidentialAddress'
        description='Same as residentail address'
        onChange={props.onChange}
        checked={props.mailingAddress.isSameAsResidential}
      />

      { !props.mailingAddress.isSameAsResidential &&

        <AddressTemplate
          type='mailing'
          address={ props.mailingAddress }
          onChange={ props.onChange }
          onSubmit={ props.onSubmit }
        />
      }
    </div>
  )
};

export default MailingAddressForm;
