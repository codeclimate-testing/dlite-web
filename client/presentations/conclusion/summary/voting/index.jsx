'use strict';
import React                       from 'react';
import Accordion                   from '../../../../containers/accordion.jsx';
import CitizenStatus               from './citizen-status.jsx';
import EligibilityRequirements     from './eligibility-requirements.jsx';
import BallotByMail                from './ballot-by-mail.jsx';
import PoliticalPartyChoose        from './choose-party.jsx';
import BallotLanguage              from './ballot-language.jsx';
import ContactMethods              from './contact-methods.jsx';
import OptOut                      from './opt-out.jsx';

const Voting = (props) => {
  const application = props.application;

  return (
    <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
      <CitizenStatus
        citizenStatus           = {application.voting.citizenStatus}
        summary                 = 'summary'
      />
      <EligibilityRequirements
        eligibilityRequirements = {application.voting.eligibilityRequirements}
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