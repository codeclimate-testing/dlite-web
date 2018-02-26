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
import PageSummaryLink              from '../page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';

const title = <div className='translation-missing'>Should Contact</div>;

const PhoneNumber = (props) => {
  if (!hasPhone(props.contactMethods)) { return null; }
  const phone = `(${props.contactMethods.phoneNumber1}) ${props.contactMethods.phoneNumber2}-${props.contactMethods.phoneNumber3}`;
  return (<SummaryItem
    title={translations.summaryPage.voterRegistration.phone}
    text={phone}
	        />);
};

const EmailAddress = (props) => {
  if (!shouldContact(props)) { return null; }
  return (<SummaryItem
    title={translations.summaryPage.voterRegistration.email}
    text={props.contactMethods.emailAddress}
	        />)
};

const Yes = (props) => {
  if (!shouldContact(props)) { return null; }
  return  (
    <SummaryItem
      title= {title}
      text={translations.shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (shouldContact(props) || declineToAnswer(props.contactMethods.shouldContact)) { return null; }
  return (<SummaryItem
      title={title}
      text={translations.shared.commonAnswers.no}
    />)
};

const Decline = (props) => {
  if (!declineToAnswer(props.contactMethods.shouldContact)) { return null; }
  return (<SummaryItem
      title={title}
      text={translations.shared.commonAnswers.declineToAnswer}
    />)
};

const ContactMethods = (props) => {
  if (shouldContactNotSelected(props)) { return null; }
  
  return (
    <PageSummaryLink
      to='/voting-registration/contact-methods'
      name='contactMethods'
    >
      <Yes contactMethods = {props.contactMethods} />
      <No contactMethods = {props.contactMethods} />
      <Decline contactMethods = {props.contactMethods} />
      <EmailAddress contactMethods = {props.contactMethods} />
      <PhoneNumber {...props} />
    </PageSummaryLink>
  )
};

export default ContactMethods;
