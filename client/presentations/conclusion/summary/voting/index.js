'use strict';

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
      />
      <EligibilityRequirements
        eligibilityRequirements = {application.voting.eligibilityRequirements}
      />
      <OptOut
        optOut                  = {application.voting.optOut}
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {application.voting.politicalPartyChoose}
      />
      <BallotLanguage
        ballotLanguage          = {application.basics.language.ballotLanguage}
      />
      <BallotByMail
        ballotByMail            = {application.voting.ballotByMail}
      />
      <ContactMethods
        contactMethods          = {application.voting.contactMethods}
      />
    </Accordion>
  )
};

export default Voting;