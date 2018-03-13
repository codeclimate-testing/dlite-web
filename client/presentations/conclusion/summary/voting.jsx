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
        editKey                 = 'citizenship'
      />
      <EligibilityRequirements
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        citizenStatus           = { application.voting.citizenStatus}
        dateOfBirth             = { application.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'votingEligibility'
      />
      <OptOut
        optOut                  = {application.voting.optOut}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'votingOptOut'
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {application.voting.politicalPartyChoose}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'choosePoliticalParty'
      />
      <BallotLanguage
        ballotLanguage          = {application.basics.language.ballotLanguage}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'chooseBallotLanguage'
      />
      <BallotByMail
        ballotByMail            = {application.voting.ballotByMail}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'ballotByMail'
      />
      <ContactMethods
        contactMethods          = {application.voting.contactMethods}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'contactMethods'
      />
    </Accordion>
  )
};

export default Voting;
