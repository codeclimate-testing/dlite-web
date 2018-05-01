'use strict';

import React                    from 'react';
import {
  ballotByMailSelected,
  eligibilityRequirementsYes,
  eligibleForCitizen,
  ballotByMail
} from '../../../../helpers/data/voting';
import { ageChecks }            from '../../../../helpers/calculate-age';
import PageSummaryLink          from '../../../../containers/page-summary-link.jsx';
import SummaryItem              from '../summary-item.jsx';

const MailBallot = (props) => {
  if(ballotByMail(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.voteByMail'
        text  = 'shared.commonAnswers.yes'
      />
    )
  } else {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.voteByMail'
        text  = 'shared.commonAnswers.no'
      />
    )
  }
}


const BallotByMail = (props) => {
  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
      <PageSummaryLink
        {...props}
      >
        <MailBallot {...props} />
      </PageSummaryLink>
    )
  }
  return null;
};

export default BallotByMail;

