'use strict';

import React from 'react';
import translations   from '../../../../i18n';

import {
  declineToAnswer
} from '../../../../helpers/data/voting';
import {
  hasPhone,
  shouldContactNotSelected,
  shouldContact,
  skipAnswer
} from '../../../../helpers/data/contact-methods';


const PhoneNumber = (props) => {
  if (!hasPhone(props.contactMethods)) { return null; }
  const phone = `(${props.contactMethods.phoneNumber1}) ${props.contactMethods.phoneNumber2}-${props.contactMethods.phoneNumber3}`;
  return (<p> Phone Number: {phone} </p>);
};

const EmailAddress = (props) => {
  if (!shouldContact(props)) { return null; }
  return <p> Email Address: {props.contactMethods.emailAddress} </p>
};

const Yes = (props) => {
  if (!shouldContact(props)) { return null; }
  return (<p className='translation-missing'>Should Contact: {translations.shared.commonAnswers.yes}</p>)
};

const No = (props) => {
  if (shouldContact(props) || declineToAnswer(props.contactMethods.shouldContact)) { return null; }
  return (<p className='translation-missing'>Should Contact: {translations.shared.commonAnswers.no}</p>)
};

const Decline = (props) => {
  if (!declineToAnswer(props.contactMethods.shouldContact)) { return null; }
  return (<p className='translation-missing'>Should Contact: {translations.shared.commonAnswers.declineToAnswer}</p>)
};

const ContactMethods = (props) => {
  if (shouldContactNotSelected(props)) { return null; }

  return (
    <div className='summary-section'>
      <Yes contactMethods = {props.contactMethods} />
      <No contactMethods = {props.contactMethods} />
      <Decline contactMethods = {props.contactMethods} />
      <EmailAddress contactMethods = {props.contactMethods} />
      <PhoneNumber {...props} />
    </div>
  );
};

export default ContactMethods;
