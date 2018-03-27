'use strict';

import React                   from 'react';
import Accordion               from '../../../containers/accordion.jsx';
import CitizenStatus           from '../../conclusion/summary/voting/citizen-status.jsx';
import EligibilityRequirements from '../../conclusion/summary/voting/eligibility-requirements.jsx';
import OptOut                  from '../../conclusion/summary/voting/opt-out.jsx';
import PoliticalPartyChoose    from '../../conclusion/summary/voting/choose-party.jsx';
import BallotLanguage          from '../../conclusion/summary/voting/ballot-language.jsx';
import BallotByMail            from '../../conclusion/summary/voting/ballot-by-mail.jsx';
import ContactMethods          from '../../conclusion/summary/voting/contact-methods.jsx';
import Translator              from '../../../i18n/translator-tag.jsx';

const VoterRegistration = (props) => {
  let cdl       = props.cdl;
  return (
    <Accordion
      id    = 'voter-registration-summary'
      title = 'summaryPage.voterRegistration.title'
      key   = 'voter-registration-summary'
    >
      <CitizenStatus
        citizenStatus           = { cdl.voting.citizenStatus }
        dateOfBirth             = { cdl.basics.dateOfBirth}
        editKey                 = 'cdlCitizenship'
      />
      <EligibilityRequirements
        eligibilityRequirements = { cdl.voting.eligibilityRequirements }
        dateOfBirth             = { cdl.basics.dateOfBirth}
        editKey                 = 'cdlVotingEligibility'
      />
      <OptOut
        optOut                  = { cdl.voting.optOut }
        dateOfBirth             = { cdl.basics.dateOfBirth}
        citizenStatus           = { cdl.voting.citizenStatus }
        eligibilityRequirements = { cdl.voting.eligibilityRequirements }
        editKey                 = 'cdlVotingOptOut'
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {cdl.voting.politicalPartyChoose}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        editKey                 = 'cdlChoosePoliticalParty'
      />
      <BallotLanguage
        ballotLanguage          = {cdl.voting.ballotLanguage}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        editKey                 = 'cdlChooseBallotLanguage'
      />
      <BallotByMail
        ballotByMail            = {cdl.voting.ballotByMail}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        editKey                 = 'cdlBallotByMail'
      />
      <ContactMethods
        contactMethods          = {cdl.voting.contactMethods}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        editKey                 = 'cdlContactMethods'
      />
    </Accordion>
  )
};

export default VoterRegistration;
