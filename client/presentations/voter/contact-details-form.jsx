'use strict';

import React                from 'react';
import { Link }             from 'react-router-dom';

import TextInput            from '../text-input.jsx';
import HomeLink             from '../home-link.jsx';
import ContinueButton       from '../continue-button.jsx';

const ContactDetailsForm = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Please enter your contact information below.</h4>
      <form onSubmit={props.onSubmit} className='contact-details-form'>
        <TextInput
          identifier='emailAddress'
          description='Email address'
          value={props.contactDetails.emailAddress}
          onChange={props.onChange}
        />

        <TextInput
          identifier='phoneNumber'
          description='Phone number'
          value={props.contactDetails.phoneNumber}
          onChange={props.onChange}
        />

        <ContinueButton
          disabled = {props.continueDisabled}
        />

      </form>
    </div>
  )
};

export default ContactDetailsForm;
