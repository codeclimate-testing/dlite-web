'use strict';

import React            from 'react';
import {
  citizenStatusNotChosen,
  eligibleForCitizen,
  declineToAnswer,
  eligibilityNotChosen
 }  from '../../../../helpers/data/voting';
import { hasValue }                 from '../../../../helpers/data/validations';
import { ageChecks }                from '../../../../helpers/calculate-age';
import PageSummaryLink              from '../../../../containers/page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';
import * as dataPresent             from '../../../../helpers/data-present';


const Yes = (props) => {
  if (!eligibleForCitizen(props)) { return null; }
  return (
    <SummaryItem
     title  = 'summaryPage.voterRegistration.citizen'
      text  = 'shared.commonAnswers.yes'
    />
  );
};

const No = (props) => {
  if (eligibleForCitizen(props) || declineToAnswer(props.citizenStatus)) { return null; }
  return (
    <SummaryItem
      title = 'summaryPage.voterRegistration.citizen'
      text  = 'shared.commonAnswers.no'
    />
  );
};

const Decline = (props) => {
  if (!declineToAnswer(props.citizenStatus)) { return null; }
  return (
    <SummaryItem
      title = 'summaryPage.voterRegistration.citizen'
      text  = 'shared.commonAnswers.declineToAnswer'
    />
  );
};

const CitizenStatus = (props) => {
  let notAvailable = <div className='translation-missing'>Not Available</div>
  let now = props.now ? props.now : new Date();
  if (ageChecks.Under16(props.dateOfBirth, now)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.citizen'
        text  = { notAvailable }
      />
    )
  }
  if ((declineToAnswer(props.citizenStatus)) || (!ageChecks.Under16(props.dateOfBirth, now)) && (citizenStatusNotChosen(props))) {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'summaryPage.voterRegistration.citizen'
          text  = 'shared.commonAnswers.declineToAnswer'
        />
      </PageSummaryLink>
    )
  }
  return (
    <PageSummaryLink
      {...props}
    >
      <Yes     {...props}   citizenStatus={props.citizenStatus} />
      <Decline {...props}   citizenStatus={props.citizenStatus} />
      <No      {...props}   citizenStatus={props.citizenStatus} />
    </PageSummaryLink>
  )
};

export default CitizenStatus;
