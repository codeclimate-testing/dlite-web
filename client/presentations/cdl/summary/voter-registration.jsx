'use strict';

import React                   from 'react';
import Accordion               from '../../../containers/accordion.jsx';
import CitizenStatus           from '../../conclusion/summary/voting/citizen-status.jsx';
import EligibilityRequirements from '../../conclusion/summary/voting/eligibility-requirements.jsx';
import OptOut                  from '../../conclusion/summary/voting/opt-out.jsx';

const VoterRegistration = (props) => {
  console.log(props)
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
    </Accordion>
  )
};

export default VoterRegistration;
