'use strict';

import React from 'react';

import { hasValue } from '../../../helpers/data/validations';
import {
  hasPhone
} from '../../../helpers/data/contact-methods';

const PhoneNumber = (props) => {
  if (!hasPhone(props.contactMethods)) { return null; }
  const phone = `(${props.contactMethods.phoneNumber1}) ${props.contactMethods.phoneNumber2}-${props.contactMethods.phoneNumber3}`;
  return (<p> Phone Number: {phone} </p>);
};

const ContactMethods = (props) => {
  let shouldContact = props.contactMethods.shouldContact;
  if (!hasValue(shouldContact)) { return null; }

  if(shouldContact !== 'Yes') {
    if(shouldContact === 'Skip') { shouldContact = 'No Answer'; }
    return (
      <div className='summary-section'>
        <p> Should Contact: {shouldContact} </p>
      </div>
    );
  }

  return (
    <div className='summary-section'>
      <p> Should Contact: {shouldContact} </p>
      <p> Email Address: {props.contactMethods.emailAddress} </p>
      <PhoneNumber {...props} />
    </div>
  );
};

export default ContactMethods;
