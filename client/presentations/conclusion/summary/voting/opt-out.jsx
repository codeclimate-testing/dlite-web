'use strict';

import React                  from 'react';

import { hasValue }            from '../../../../helpers/data/validations';
import {
  optOutSelected,
  eligibilityRequirementsYes,
  eligibleForCitizen
}   from '../../../../helpers/data/voting';
import { ageChecks }            from '../../../../helpers/calculate-age';

import PageSummaryLink          from '../../../../containers/page-summary-link.jsx';
import SummaryItem              from '../summary-item.jsx';

const OptOut = (props) => {
  let optOut = '';

  if (props.optOut === 'new') {
    optOut =  'summaryPage.voterRegistration.choiceYes';
  } else if (props.optOut === 'existing') {
    optOut =  'summaryPage.voterRegistration.choiceUpdate';
  } else if (props.optOut === 'optOut') {
    optOut =  'summaryPage.voterRegistration.choiceNo';
  };

  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props))) {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'summaryPage.voterRegistration.registrationChoice'
          text  = { optOut }
        />
      </PageSummaryLink>
    )
  }
  return null;
};

export default OptOut;

