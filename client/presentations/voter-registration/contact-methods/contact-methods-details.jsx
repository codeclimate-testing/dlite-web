'use strict';

import React from 'react';

import TextInput from '../../text-input.jsx';

const ContactDetails = (props) => {

  if(props.contactMethods.shouldContact !== 'Yes') { return null; }
  
  return (
    <div className='contact-methods-details-form'>
      <hr/>
      <h2 className='question'>Please enter your contact information below.</h2>
      <p>This is optional</p>
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
      <p>Who gets this information?</p>
      <p>Secretary of State and county election officials have access to this information</p>
    </div>
  )
};

export default ContactDetails;
