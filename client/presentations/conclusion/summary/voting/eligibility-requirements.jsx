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
import PageSummaryLink         from '../page-summary-link.jsx';
import SummaryItem             from '../summary-item.jsx';
import * as dataPresent        from '../../../../helpers/data-present';


const Yes = (props) => {
  if (!eligibilityRequirementsYes(props)) { return null; }
  return (<SummaryItem
	          title={translations.summaryPage.voterRegistration.eligible}
	          text={translations.shared.commonAnswers.yes}
	        />)
};

const No = (props) => {
  if (eligibilityRequirementsYes(props) || declineToAnswer(props.eligibilityRequirements)) { return null; }
  return (<SummaryItem
	          title={translations.summaryPage.voterRegistration.eligible}
	          text={translations.shared.commonAnswers.no}
	        />)
};

const Decline = (props) => {
  if (!declineToAnswer(props.eligibilityRequirements)) { return null; }
  return (<SummaryItem
	          title={translations.summaryPage.voterRegistration.eligible}
	          text={translations.shared.commonAnswers.declineToAnswer}
	        />)
};
const EligibilityRequirements = (props) => {
  if (!hasValue(props.eligibilityRequirements)) { return null; }
  let notAvailable = <div className='translation-missing'>Not Available</div>
  let now = props.now ? props.now : new Date();
  if (ageChecks.Under16(props.dateOfBirth, now)) {
    return (
      <SummaryItem
        title={translations.summaryPage.voterRegistration.eligible}
        text={notAvailable}
      />
    )
  }
  if ((eligibilityNotChosen(props)) && (declineToAnswer(props.citizenStatus))) {
    return (
      <PageSummaryLink
        to='/voting-registration/eligibility'
        name='votingEligibility'
      >
        <SummaryItem
          title={translations.summaryPage.voterRegistration.eligible}
          text={translations.shared.commonAnswers.declineToAnswer}
        />
      </PageSummaryLink>
    )
  }
  return (
    <PageSummaryLink
      to='/voting-registration/eligibility'
      name='votingEligibility'
    >
      <Yes eligibilityRequirements={props.eligibilityRequirements} />
      <Decline eligibilityRequirements={props.eligibilityRequirements} />
      <No eligibilityRequirements={props.eligibilityRequirements} />
    </PageSummaryLink>
  )
};


export default EligibilityRequirements;
