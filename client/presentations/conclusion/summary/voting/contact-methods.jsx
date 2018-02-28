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
import PageSummaryLink              from '../Page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';

const title = <div className='translation-missing'>Should Contact</div>;

const PhoneNumber = (props) => {
  if (!hasPhone(props.contactMethods)) { return null; }
  let locale = props.locale;
  const phone = `(${props.contactMethods.phoneNumber1}) ${props.contactMethods.phoneNumber2}-${props.contactMethods.phoneNumber3}`;
  return (<SummaryItem
    title={translations[locale].summaryPage.voterRegistration.phone}
    text={phone}
	        />);
};

const EmailAddress = (props) => {
  if (!shouldContact(props)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
    title={translations[locale].summaryPage.voterRegistration.email}
    text={props.contactMethods.emailAddress}
	        />)
};

const Yes = (props) => {
  if (!shouldContact(props)) { return null; }
  let locale = props.locale;
  return  (
    <SummaryItem
      title= {title}
      text={translations[locale].shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (shouldContact(props) || declineToAnswer(props.contactMethods.shouldContact)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
      title={title}
      text={translations[locale].shared.commonAnswers.no}
    />)
};

const Decline = (props) => {
  if (!declineToAnswer(props.contactMethods.shouldContact)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
      title={title}
      text={translations[locale].shared.commonAnswers.declineToAnswer}
    />)
};

const ContactMethods = (props) => {
  if (shouldContactNotSelected(props)) { return null; }

  return (
    <PageSummaryLink
      to='/voting-registration/contact-methods'
      name='contactMethods'
    >
      <Yes          {...props} />
      <No           {...props} />
      <Decline      {...props} />
      <EmailAddress {...props} />
      <PhoneNumber  {...props} />
    </PageSummaryLink>
  )
};

export default ContactMethods;
