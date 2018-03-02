'use strict';

import React from 'react';
import translations   from '../../../../i18n';

import {
  eligibilityRequirementsYes,
  eligibleForCitizen
} from '../../../../helpers/data/voting';
import { ageChecks }           from '../../../../helpers/calculate-age';
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

const ContactMethods = (props) => {
  let locale = props.locale;
  let contactMethods = '';

  if (shouldContact(props)) {
    contactMethods = <p>{translations[locale].shared.commonAnswers.yes}</p>
  } else if (props.contactMethods.shouldContact === 'no') {
    contactMethods = <p>{translations[locale].shared.commonAnswers.no}</p>
  } else if (skipAnswer(props)) {
    contactMethods = <p>{translations[locale].shared.commonAnswers.skip}</p>
  };
  
  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
    <PageSummaryLink
      to='/voting-registration/contact-methods'
      name='contactMethods'
    >
    <SummaryItem
        title={title}
        text={contactMethods}
      />
      <EmailAddress {...props} />
      <PhoneNumber  {...props} /> 
    </PageSummaryLink>
    )
  }
  return null;
};

export default ContactMethods;

