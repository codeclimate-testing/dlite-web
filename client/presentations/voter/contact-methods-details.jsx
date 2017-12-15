'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import TextInput from '../text-input.jsx';

const ContactDetails = (props) => {
  return (
    <div className='contact-methods-details-form'>
      <h4>Please enter your contact information below.</h4>
      <h6>This is optional</h6>
      <TextInput
        identifier='emailAddress'
        description='Email address'
        example='aliceball1234@gmail.com'
        value={props.contactDetails.emailAddress}
        onChange={props.onChange}
      />
      <TextInput
        identifier='phoneNumber'
        description='Phone number'
        example='916 314 8765'
        value={props.contactDetails.phoneNumber}
        onChange={props.onChange}
      />
      <h4>Who gets this information?</h4>
      <p>Secretary of State and county election officials have access to this information</p>
    </div>
  )
};

export default ContactDetails;
