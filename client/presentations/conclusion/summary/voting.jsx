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
        locale                  = { locale }
        summary                 = 'summary'
        citizenStatus           = { application.voting.citizenStatus}
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        dateOfBirth             = { application.basics.dateOfBirth}
      />
      <EligibilityRequirements
        locale                  = { locale }
        summary                 = 'summary'
        eligibilityRequirements = { application.voting.eligibilityRequirements}
        citizenStatus           = { application.voting.citizenStatus}
        dateOfBirth             = { application.basics.dateOfBirth}
      />
      <OptOut
        locale                  = { locale }
        summary                 = 'summary'
        optOut                  = { application.voting.optOut}
      />
      <PoliticalPartyChoose
        locale                  = { locale }
        summary                 = 'summary'
        politicalPartyChoose    = { application.voting.politicalPartyChoose}
      />
      <BallotLanguage
        locale                  = { locale }
        summary                 = 'summary'
        ballotLanguage          = { application.basics.language.ballotLanguage}
      />
      <BallotByMail
        locale                  = { locale }
        summary                 = 'summary'
        ballotByMail            = { application.voting.ballotByMail}
      />
      <ContactMethods
        locale                  = { locale }
        summary                 = 'summary'
        contactMethods          = { application.voting.contactMethods}
      />
    </Accordion>
  )
};

export default Voting;