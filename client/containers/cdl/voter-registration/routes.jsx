'use strict';

import React                   from 'react';
import { Route }               from 'react-router-dom';
import {
  cdlPath,
  editCDLPath
 } from '../../../helpers/alice-path';
import citizenStatus           from './cdl-citizen-status.jsx';
import eligibilityRequirements from './cdl-eligibility-requirements.jsx';
import optOut                  from './cdl-opt-out.jsx';
import cdlVoterPreferencesIntro    from './cdl-voter-preferences.jsx';
import cdlVoterPreferencesIntroUpdated  from './cdl-voter-preferences-updated.jsx';
import cdlPoliticalPartyChoose     from './cdl-choose-party.jsx';
import cdlBallotLanguage           from './cdl-ballot-language.jsx';
import cdlBallotByMail             from './cdl-ballot-by-mail.jsx';
import cdlContactMethods           from './cdl-contact-methods.jsx';
import cdlVoterRegComplete         from './cdl-voter-confirmation.jsx';

const CDLVoterRegistration = () => {
  return (
    <div>
      <Route path={ cdlPath('/voting-registration/citizenship')}  component={citizenStatus} />
      <Route path={ editCDLPath('/voting-registration/citizenship')}  component={citizenStatus} />

      <Route path={ cdlPath('/voting-registration/eligibility')}    component={eligibilityRequirements} />
      <Route path={ editCDLPath('/voting-registration/eligibility')}    component={eligibilityRequirements} />

      <Route path={ cdlPath('/voting-registration/opt-out')}    component={optOut} />
      <Route path={ editCDLPath('/voting-registration/opt-out')}    component={optOut} />

      <Route path={ cdlPath('/voting-registration/preferences')}         component={cdlVoterPreferencesIntro} />
      <Route path={ cdlPath('/voting-registration/preferences-updated')} component={cdlVoterPreferencesIntroUpdated} />

      <Route path={ cdlPath('/voting-registration/language') }          component={cdlBallotLanguage} />
      <Route path={ editCDLPath('/voting-registration/language') }          component={cdlBallotLanguage} />

      <Route path={ cdlPath('/voting-registration/choose-party') }         component={cdlPoliticalPartyChoose} />
      <Route path={ editCDLPath('/voting-registration/choose-party') }         component={cdlPoliticalPartyChoose} />

      <Route path={ cdlPath('/voting-registration/vote-by-mail') }         component={cdlBallotByMail} />
      <Route path={ editCDLPath('/voting-registration/vote-by-mail') }         component={cdlBallotByMail} />

      <Route path={ cdlPath('/voting-registration/contact-methods') }         component={cdlContactMethods} />
      <Route path={ editCDLPath('/voting-registration/contact-methods') }         component={cdlContactMethods} />

      <Route path={ cdlPath('/voting-registration/confirmation') }         component={cdlVoterRegComplete} />
    </div>
  )
};

export default CDLVoterRegistration;
