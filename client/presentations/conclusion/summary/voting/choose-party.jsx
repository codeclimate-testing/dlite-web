'use strict';

import React from 'react';

import PageSummaryLink              from '../../../../containers/page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';
import {
  politicalPartySelected,
  getStringByParty,
  eligibilityRequirementsYes,
  eligibleForCitizen,
  americanIndependentParty,
  democraticParty,
  greenParty,
  libertarianParty,
  peaceAndFreedomParty,
  republicanParty,
  otherParty,
  skipParty
}   from '../../../../helpers/data/voting';
import { ageChecks }                from '../../../../helpers/calculate-age';

const PoliticalParty = (props) => {
  if(skipParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'shared.summary.notProvided'
      />
    )
  } else if(americanIndependentParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'votingRegistration.choosePartyPage.answerAmericanIndependent'
      />
    )
  } else if(democraticParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'votingRegistration.choosePartyPage.answerDemocraticParty'
      />
    )
  } else if(greenParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'votingRegistration.choosePartyPage.answerGreenParty'
      />
    )
  } else if(libertarianParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'votingRegistration.choosePartyPage.answerLibertarianParty'
      />
    )
  } else if(peaceAndFreedomParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'votingRegistration.choosePartyPage.answerPeaceAndFreedomParty'
      />
    )
  } else if(republicanParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = 'votingRegistration.choosePartyPage.answerRepublicanParty'
      />
    )
  } else if(otherParty(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.voterRegistration.politicalParty'
        text  = {props.politicalPartyChoose.otherParty}
      />
    )
  } else {
    return null;
  }
}

const PoliticalPartyChoose = (props) => {
  let party = getStringByParty(props);
  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
      <PageSummaryLink
        {...props}
      >
        <PoliticalParty {...props} />
      </PageSummaryLink>
    )
  }
  return null;
};


export default PoliticalPartyChoose;

