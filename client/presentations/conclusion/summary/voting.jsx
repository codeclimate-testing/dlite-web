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
  let application = props.application;
  let locale = props.ui.locale;
  return (
    <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
      <CitizenStatus
        citizenStatus           = { application.voting.citizenStatus}
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        dateOfBirth             = { application.basics.dateOfBirth}
        locale                  = { locale }
        summary                 = 'summary'
      />
      <EligibilityRequirements
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        citizenStatus           = { application.voting.citizenStatus}
        dateOfBirth             = { application.basics.dateOfBirth}
        locale                  = { locale }
        summary                 = 'summary'
      />
      <OptOut
        optOut                  = {application.voting.optOut}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        locale                  = { locale }
        summary                 = 'summary'
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {application.voting.politicalPartyChoose}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <BallotLanguage
        ballotLanguage          = {application.basics.language.ballotLanguage}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <BallotByMail
        ballotByMail            = {application.voting.ballotByMail}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
        locale                  = { locale }
      />
      <ContactMethods
        contactMethods          = {application.voting.contactMethods}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        summary                 = 'summary'
        locale                  = { locale }
      />
    </Accordion>
  )
};

export default Voting;