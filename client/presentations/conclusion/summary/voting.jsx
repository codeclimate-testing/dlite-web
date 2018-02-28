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

  return (
    <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
      <CitizenStatus
        citizenStatus           = {props.voting.citizenStatus}
        eligibilityRequirements = {props.voting.eligibilityRequirements}
        dateOfBirth             = {props.basics.dateOfBirth}
      />
      <EligibilityRequirements
        eligibilityRequirements = {props.voting.eligibilityRequirements}
        citizenStatus           = {props.voting.citizenStatus}
        dateOfBirth             = {props.basics.dateOfBirth}
      />
      <OptOut
        optOut                  = {props.voting.optOut}
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {props.voting.politicalPartyChoose}
      />
      <BallotLanguage
        ballotLanguage          = {props.basics.language.ballotLanguage}
      />
      <BallotByMail
        ballotByMail            = {props.voting.ballotByMail}
      />
      <ContactMethods
        contactMethods          = {props.voting.contactMethods}
      />
    </Accordion>
  )
};

export default Voting;