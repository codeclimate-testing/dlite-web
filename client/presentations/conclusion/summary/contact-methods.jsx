'use strict';

import React from 'react';

import { hasValue }             from '../../../helpers/data/validations';
import {
  shouldContactMethods
} from '../../../helpers/data/voting';
import {
  hasPhone,
  shouldContactNotSelected,
  shouldContact,
  skipAnswer
} from '../../../helpers/data/contact-methods';
import {
  getStringByStatus
} from '../../../helpers/data/summary'

const PhoneNumber = (props) => {
  if (!hasPhone(props.contactMethods)) { return null; }
  const phone = `(${props.contactMethods.phoneNumber1}) ${props.contactMethods.phoneNumber2}-${props.contactMethods.phoneNumber3}`;
  return (<p> Phone Number: {phone} </p>);
};

const EmailAddress = (props) => {
  if (!shouldContact(props)) { return null; }
  return <p> Email Address: {props.contactMethods.emailAddress} </p>
};

const ContactMethods = (props) => {
  if (shouldContactNotSelected(props)) { return null; }

  const yesText = 'Yes';
  const noText = 'No';
  const declineText = 'No Answer';

  let text = getStringByStatus(props.contactMethods.shouldContact, yesText, noText, declineText);

  return (
    <div className='summary-section'>
      <p> Should Contact: {text} </p>
      <EmailAddress contactMethods = {props.contactMethods} />
      <PhoneNumber {...props} />
    </div>
  );
};

export default ContactMethods;
