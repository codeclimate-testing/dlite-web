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
import translations     from '../../../i18n';

const Voting = (props) => {
  let application = props.application;
  let locale = props.ui.locale;
  return (
    <Accordion id='voter-registration-summary' title={translations[locale].summaryPage.voterRegistration.title} key='voter-registration-summary'>
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
        ballotLanguage          = {application.voting.ballotLanguage}
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
