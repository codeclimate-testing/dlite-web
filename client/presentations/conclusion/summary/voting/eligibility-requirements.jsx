'use strict';

import React          from 'react';
import translations   from '../../../../i18n';
import {
  eligibilityRequirementsYes,
  declineToAnswer,
  eligibilityNotChosen
}  from '../../../../helpers/data/voting';
import { hasValue }            from '../../../../helpers/data/validations';
import { ageChecks }           from '../../../../helpers/calculate-age';
import PageSummaryLink         from '../../../../containers/page-summary-link.jsx';
import SummaryItem             from '../summary-item.jsx';
import * as dataPresent        from '../../../../helpers/data-present';


const Yes = (props) => {
  if (!eligibilityRequirementsYes(props)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
	          title={translations[locale].summaryPage.voterRegistration.eligible}
	          text={translations[locale].shared.commonAnswers.yes}
	        />)
};

const No = (props) => {
  if (eligibilityRequirementsYes(props) || declineToAnswer(props.eligibilityRequirements)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
	          title={translations[locale].summaryPage.voterRegistration.eligible}
	          text={translations[locale].shared.commonAnswers.no}
	        />)
};

const Decline = (props) => {
  if (!declineToAnswer(props.eligibilityRequirements)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
	          title={translations[locale].summaryPage.voterRegistration.eligible}
	          text={translations[locale].shared.commonAnswers.declineToAnswer}
	        />)
};
const EligibilityRequirements = (props) => {
  let notAvailable = <div className='translation-missing'>Not Available</div>
  let now = props.now ? props.now : new Date();
  let locale = props.locale;
  if (ageChecks.Under16(props.dateOfBirth, now)) {
    return (
      <SummaryItem
        title={translations[locale].summaryPage.voterRegistration.eligible}
        text={notAvailable}
      />
    )
  }
  if ((declineToAnswer(props.eligibilityRequirements)) || (!ageChecks.Under16(props.dateOfBirth, now)) && (eligibilityNotChosen(props))) {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title={translations[locale].summaryPage.voterRegistration.eligible}
          text={translations[locale].shared.commonAnswers.declineToAnswer}
        />
      </PageSummaryLink>
    )
  }
  return (
    <PageSummaryLink
      {...props}
    >
      <Yes        {...props} />
      <Decline    {...props} />
      <No         {...props} />
    </PageSummaryLink>
  )
};


export default EligibilityRequirements;
