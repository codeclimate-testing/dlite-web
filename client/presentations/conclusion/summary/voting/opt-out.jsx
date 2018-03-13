'use strict';

import React from 'react';
import translations            from '../../../../i18n';

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
  let locale = props.locale;
  let optOut = '';

  if (props.optOut === 'new') {
    optOut = <p>{translations[locale].summaryPage.voterRegistration.choiceYes}</p>
  } else if (props.optOut === 'existing') {
    optOut = <p>{translations[locale].summaryPage.voterRegistration.choiceUpdate}</p>
  } else if (props.optOut === 'optOut') {
    optOut = <p>{translations[locale].summaryPage.voterRegistration.choiceNo}</p>
  };

  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props))) {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title={translations[locale].summaryPage.voterRegistration.registrationChoice}
          text={optOut}
        />
      </PageSummaryLink>
    )
  }
  return null;
};

export default OptOut;

