'use strict';

import React                    from 'react';
import translations             from '../../../../i18n';
import { 
  ballotByMailSelected,
  eligibilityRequirementsYes,
  eligibleForCitizen
} from '../../../../helpers/data/voting';
import { ageChecks }           from '../../../../helpers/calculate-age';

import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const BallotByMail = (props) => {
  let locale = props.locale;
  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
      <PageSummaryLink
        to='/voting-registration/vote-by-mail'
        name='ballotByMail'
      >
        <SummaryItem
          title={translations[locale].summaryPage.voterRegistration.voteByMail}
          text={props.ballotByMail}
        />
      </PageSummaryLink>
    )
  }
  return null;
};

export default BallotByMail;

