'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import TextInput from './text-input.jsx';
import alicePath from '../helpers/alice-path';

const ContactDetailsForm = (props) => {
  return (
    <div className='contact-details-section'>
      <Link to={ alicePath('/') }>Back to application</Link>

      <div className='contact-details-form'>
        <form onSubmit={props.onSubmit}>
          <TextInput
            type='contactDetails'
            identifier='emailAddress'
            description='Email address'
            value={props.contactDetails.emailAddress}
            onChange={props.onChange}
					/>

          <TextInput
            type='contactDetails'
            identifier='phoneNumber'
            description='Phone number'
            value={props.contactDetails.phoneNumber}
            onChange={props.onChange}
					/>
          <input type="submit" name="submitContactDetails" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default ContactDetailsForm;
