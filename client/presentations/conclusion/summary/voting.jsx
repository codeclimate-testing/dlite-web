'use strict';
import React                       from 'react';
import Accordion                   from '../../../containers/accordion.jsx';
import {
  CitizenStatus,
  EligibilityRequirements,
  BallotByMail,
  PoliticalPartyChoose,
  BallotLanguage,
  ContactMethods,
  OptOut
} from './voting/index';
import {
  DateOfBirth,
} from './my-basics/index';

const Voting = (props) => {
  const application = props.application;

  return (
    <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
      <CitizenStatus
        citizenStatus           = {application.voting.citizenStatus}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
      />
      <EligibilityRequirements
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
      />
      <OptOut
        optOut                  = {application.voting.optOut}
        summary                 = 'summary'
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {application.voting.politicalPartyChoose}
        summary                 = 'summary'
      />
      <BallotLanguage
        ballotLanguage          = {application.basics.language.ballotLanguage}
        summary                 = 'summary'
      />
      <BallotByMail
        ballotByMail            = {application.voting.ballotByMail}
        summary                 = 'summary'
      />
      <ContactMethods
        contactMethods          = {application.voting.contactMethods}
        summary                 = 'summary'
      />
    </Accordion>
  )
};

export default Voting;