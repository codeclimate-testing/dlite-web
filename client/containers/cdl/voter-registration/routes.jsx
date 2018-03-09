'use strict';

import React                   from 'react';
import { Route }               from 'react-router-dom';
import { cdlPath }             from '../../../helpers/alice-path';
import citizenStatus           from './cdl-citizen-status.jsx';
import eligibilityRequirements from './cdl-eligibility-requirements.jsx';
import optOut                  from './cdl-opt-out.jsx';

const CDLVoterRegistration = () => {
  return (
    <div>
      <Route path={ cdlPath('/voting-registration/citizenship')}  component={citizenStatus} />
      <Route path={ cdlPath('/voting-registration/eligibility')}    component={eligibilityRequirements} />
      <Route path={ cdlPath('/voting-registration/opt-out')}    component={optOut} />
    </div>
  )
};

export default CDLVoterRegistration;
