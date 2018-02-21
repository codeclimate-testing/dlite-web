'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { iddlPath }                           from '../../helpers/alice-path';
import VoterIntro                             from './introduction-form-container.jsx';
import VoterCitizenStatus                     from './citizen-status-form-container.jsx';
import EligibilityRequirements                from './eligibility-requirements-form-container.jsx';
import OptOut                                 from './opt-out-form-container.jsx';
import VoterPreferencesIntro                  from './voter-preferences-form-container.jsx';
import VoterPreferencesIntroUpdated           from './voter-preferences-updated-form-container.jsx';
import PoliticalPartyChoose                   from './choose-party-form-container.jsx';
import BallotLanguage                         from './ballot-language-form-container.jsx';
import BallotByMail                           from './ballot-by-mail-form-container.jsx';
import ContactMethods                         from './contact-methods-form-container.jsx';
import VoterRegComplete                       from './voter-confirmation-form-container.jsx';

const VotingRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/voting-registration/introduction') }         component={VoterIntro} />
      <Route path={ iddlPath('/voting-registration/citizenship') }          component={VoterCitizenStatus} />
      <Route path={ iddlPath('/voting-registration/eligibility') }          component={EligibilityRequirements} />
      <Route path={ iddlPath('/voting-registration/opt-out') }              component={OptOut} />
      <Route path={ iddlPath('/voting-registration/preferences') }          component={VoterPreferencesIntro} />
      <Route path={ iddlPath('/voting-registration/preferences-updated') }  component={VoterPreferencesIntroUpdated} />
      <Route path={ iddlPath('/voting-registration/choose-party') }         component={PoliticalPartyChoose} />
      <Route path={ iddlPath('/voting-registration/language') }             component={BallotLanguage} />
      <Route path={ iddlPath('/voting-registration/vote-by-mail') }         component={BallotByMail} />
      <Route path={ iddlPath('/voting-registration/contact-methods') }      component={ContactMethods} />
      <Route path={ iddlPath('/voting-registration/confirmation') }         component={VoterRegComplete} />
    </div>
    );
};

export default VotingRoutes;