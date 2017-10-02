'use strict';

import React          from 'react';
import { Link }       from 'react-router-dom';

import TextInput      from '../text-input.jsx';
import HomeLink       from '../home-link.jsx';

const ContactDetailsForm = (props) => {
  return (
    <div className='contact-details-section'>
      <HomeLink />

      <div className='contact-details-form'>
        <form onSubmit={props.onSubmit}>
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
          <input type="submit" name="submitContactDetails" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default ContactDetailsForm;
