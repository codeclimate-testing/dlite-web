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
import Translator                 from '../../../i18n/translator-tag.jsx';

const Voting = (props) => {
  let application = props.application;

  return (
    <Accordion
      id    = 'voter-registration-summary'
      title = 'summaryPage.voterRegistration.title'
      key   = 'voter-registration-summary'
    >
      <CitizenStatus
        citizenStatus           = { application.voting.citizenStatus}
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        dateOfBirth             = { application.basics.dateOfBirth}
        editKey                 = 'citizenship'
      />
      <EligibilityRequirements
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        citizenStatus           = { application.voting.citizenStatus}
        dateOfBirth             = { application.basics.dateOfBirth}
        editKey                 = 'votingEligibility'
      />
      <OptOut
        optOut                  = {application.voting.optOut}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        editKey                 = 'votingOptOut'
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {application.voting.politicalPartyChoose}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        editKey                 = 'choosePoliticalParty'
      />
      <BallotLanguage
        ballotLanguage          = {application.voting.ballotLanguage}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        editKey                 = 'chooseBallotLanguage'
      />
      <BallotByMail
        ballotByMail            = {application.voting.ballotByMail}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        editKey                 = 'ballotByMail'
      />
      <ContactMethods
        contactMethods          = {application.voting.contactMethods}
        eligibilityRequirements = {application.voting.eligibilityRequirements}
        citizenStatus           = {application.voting.citizenStatus}
        dateOfBirth             = {application.basics.dateOfBirth}
        editKey                 = 'contactMethods'
      />
    </Accordion>
  )
};

export default Voting;
