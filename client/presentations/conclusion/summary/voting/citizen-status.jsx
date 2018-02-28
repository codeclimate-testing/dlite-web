'use strict';

import React          from 'react';
import translations   from '../../../../i18n';
import {
  citizenStatusNotChosen,
  eligibleForCitizen,
  declineToAnswer,
  eligibilityNotChosen
 }  from '../../../../helpers/data/voting';
import { hasValue }                 from '../../../../helpers/data/validations';
import { ageChecks }                from '../../../../helpers/calculate-age';
import PageSummaryLink              from '../Page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';
import * as dataPresent             from '../../../../helpers/data-present';


const Yes = (props) => {
  if (!eligibleForCitizen(props)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
	          title={translations[locale].summaryPage.voterRegistration.citizen}
	          text={translations[locale].shared.commonAnswers.yes}
	        />)
};

const No = (props) => {
  if (eligibleForCitizen(props) || declineToAnswer(props.citizenStatus)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
	          title={translations[locale].summaryPage.voterRegistration.citizen}
	          text={translations[locale].shared.commonAnswers.no}
	        />)
};

const Decline = (props) => {
  if (!declineToAnswer(props.citizenStatus)) { return null; }
  let locale = props.locale;
  return (<SummaryItem
	          title={translations[locale].summaryPage.voterRegistration.citizen}
	          text={translations[locale].shared.commonAnswers.declineToAnswer}
	        />)
};

const CitizenStatus = (props) => {
  let notAvailable = <div className='translation-missing'>Not Available</div>
  let now = props.now ? props.now : new Date();
  let locale = props.locale;
  if (ageChecks.Under16(props.dateOfBirth, now)) {
    return (
      <SummaryItem
        title={translations[locale].summaryPage.voterRegistration.citizen}
        text={notAvailable}
      />
    )
  }
  if ((declineToAnswer(props.citizenStatus)) || (!ageChecks.Under16(props.dateOfBirth, now)) && (citizenStatusNotChosen(props))) {
    return (
      <PageSummaryLink
        to='/voting-registration/citizenship'
        name='citizenship'
      >
        <SummaryItem
          title={translations[locale].summaryPage.voterRegistration.citizen}
          text={translations[locale].shared.commonAnswers.declineToAnswer}
        />
      </PageSummaryLink>
    )
  }
  return (
    <PageSummaryLink
      to='/voting-registration/citizenship'
      name='citizenship'
    >
      <Yes     {...props}   citizenStatus={props.citizenStatus} />
      <Decline {...props}   citizenStatus={props.citizenStatus} />
      <No      {...props}   citizenStatus={props.citizenStatus} />
    </PageSummaryLink>
  )
};

export default CitizenStatus;
