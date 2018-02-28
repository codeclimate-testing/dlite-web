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
  const application   = props.application;
  let locale          = props.ui.locale;

  return (
    <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
      <CitizenStatus
        citizenStatus           = {application.voting.citizenStatus}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <EligibilityRequirements
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <OptOut
        optOut                  = {application.voting.optOut}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {application.voting.politicalPartyChoose}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <BallotLanguage
        ballotLanguage          = {application.basics.language.ballotLanguage}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <BallotByMail
        ballotByMail            = {application.voting.ballotByMail}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <ContactMethods
        contactMethods          = {application.voting.contactMethods}
        summary                 = 'summary'
        locale                  = { locale }
      />
    </Accordion>
  )
};

export default Voting;