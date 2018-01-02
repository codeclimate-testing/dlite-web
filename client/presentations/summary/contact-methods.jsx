'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const ContactMethods = (props) => {
  let shouldContact = props.contactMethods.shouldContact;
  if (!hasValue(shouldContact)) { return null; }

  if(shouldContact !== 'Yes') {
    if(shouldContact === 'Skip Question') { shouldContact = 'No Answer'; }
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
      <p> Phone Number: {props.contactMethods.phoneNumber} </p>
    </div>
  );
};

export default ContactMethods;
