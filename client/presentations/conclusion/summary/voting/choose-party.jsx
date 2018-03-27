'use strict';

import React from 'react';

import PageSummaryLink              from '../../../../containers/page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';
import {
  politicalPartySelected,
  getStringByParty,
  eligibilityRequirementsYes,
  eligibleForCitizen
}   from '../../../../helpers/data/voting';
import { ageChecks }                from '../../../../helpers/calculate-age';

const PoliticalPartyChoose = (props) => {
  let party = getStringByParty(props);
  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'summaryPage.voterRegistration.politicalParty'
          text  = { party }
        />
      </PageSummaryLink>
    )
  }
  return null;
};


export default PoliticalPartyChoose;

