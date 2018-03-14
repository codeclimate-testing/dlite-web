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

const VoterRegistration = (props) => {
  let cdl       = props.cdl;
  let locale    = props.ui.locale;
  return (
    <Accordion id='voter-registration-summary' title='Voter registration' >
      <CitizenStatus
        citizenStatus = { cdl.voting.citizenStatus }
        dateOfBirth   = { cdl.basics.dateOfBirth}
        editKey       = 'cdlCitizenship'
        summary       = 'cdlSummary'
        locale        = { locale }
      />
      <EligibilityRequirements
        eligibilityRequirements = { cdl.voting.eligibilityRequirements }
        dateOfBirth   = { cdl.basics.dateOfBirth}
        editKey       = 'cdlVotingEligibility'
        summary       = 'cdlSummary'
        locale        = { locale }
      />
      <OptOut
        optOut       = { cdl.voting.optOut }
        dateOfBirth  = { cdl.basics.dateOfBirth}
        citizenStatus = { cdl.voting.citizenStatus }
        eligibilityRequirements = { cdl.voting.eligibilityRequirements }
        editKey      = 'cdlVotingOptOut'
        summary      = 'cdlSummary'
        locale       = { locale }
      />
      <PoliticalPartyChoose
        politicalPartyChoose    = {cdl.voting.politicalPartyChoose}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        summary                 = 'summary'
        editKey                 = 'cdlChoosePoliticalParty'
        locale                  = { locale }
      />
      <BallotLanguage
        ballotLanguage          = {cdl.basics.language.ballotLanguage}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        summary                 = 'summary'
        editKey                 = 'cdlChooseBallotLanguage'
        locale                  = { locale }
      />
      <BallotByMail
        ballotByMail            = {cdl.voting.ballotByMail}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'cdlBallotByMail'
      />
      <ContactMethods
        contactMethods          = {cdl.voting.contactMethods}
        eligibilityRequirements = {cdl.voting.eligibilityRequirements}
        citizenStatus           = {cdl.voting.citizenStatus}
        dateOfBirth             = {cdl.basics.dateOfBirth}
        locale                  = { locale }
        editKey                 = 'cdlContactMethods'
      />
    </Accordion>
  )
};

export default VoterRegistration;
