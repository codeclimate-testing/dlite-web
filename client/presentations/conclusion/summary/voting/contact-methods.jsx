'use strict';

import React          from 'react';

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
import PageSummaryLink              from '../../../../containers/page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';

const title = 'Should Contact';

const PhoneNumber = (props) => {
  if (!hasPhone(props.contactMethods)) { return null; }
  const phone = `(${props.contactMethods.phoneNumber1}) ${props.contactMethods.phoneNumber2}-${props.contactMethods.phoneNumber3}`;
  return (
    <SummaryItem
      className = 'follower'
      title     = 'summaryPage.voterRegistration.phone'
      text      = { phone }
    />
  );
};

const EmailAddress = (props) => {
  if (!shouldContact(props)) { return null; }
  return (
    <SummaryItem
      className = 'follower'
      title     = 'summaryPage.voterRegistration.email'
      text      = { props.contactMethods.emailAddress }
    />
);
};

const ContactMethods = (props) => {
  let contactMethods = 'No';
  if (shouldContact(props)) {
    contactMethods =  'shared.commonAnswers.yes';
  } else if (props.contactMethods.shouldContact === 'No') {
    contactMethods =  'shared.commonAnswers.no';
  } else if (skipAnswer(props)) {
    contactMethods =  'shared.commonAnswers.skip';
  };

  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
    <PageSummaryLink
      {...props}
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

