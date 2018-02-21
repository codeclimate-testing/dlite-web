'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { pathForPage }                        from '../helpers/navigation/page';
import {
  alicePath,
  iddlPath,
  addPath,
  cdlPath
}   from '../helpers/alice-path';

import Home                                   from '../presentations/home.jsx';
import ChooseLanguage                         from './get-started/choose-language-page.jsx';
import ChooseApplication                      from './get-started/choose-application-page.jsx';
import IDDLWelcome                            from './get-started/id-dl-page.jsx';
import CDLWelcome                             from './cdl/cdl-page.jsx';

import IDMe                                   from './get-started/id-me-page.jsx';
import Welcome                                from './get-started/welcome-page.jsx';
import WhatDoYouWantToDoToday                 from './get-started/what-do-you-want-to-do-today-page.jsx';
import ReplacementDetails                     from './get-started/replacement-details-page.jsx';
import CurrentCardInfo                        from './get-started/current-card-page.jsx';
import UpdatesCorrects                        from './get-started/correct-or-update-page.jsx';
import OrganDonation                          from './organ-donation/organ-donation-form-container.jsx';
import SeniorID                               from './get-started/senior-id-page.jsx';
import LicenseType                            from './get-started/license-type-page.jsx';
import ReducedFee                             from './get-started/reduced-fee-page.jsx';
import MedicalHistory                         from './my-history/medical-history-form-container.jsx';
import CardHistory                            from './my-history/card-history-page.jsx';
import LicenseIssues                          from './my-history/license-issues-form-container.jsx';

import GetStartedRoutes                       from './get-started/routes.jsx';
import MyBasicsRoutes                         from './my-basics/routes.jsx';
import MyHistoryRoutes                        from './my-history/routes.jsx';
import VotingRoutes                           from './voter-registration/routes.jsx';
import ConclusionRoutes                       from './conclusion/routes.jsx';


class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/links') }                     exact component={Home} />

        <Route path={ alicePath('/choose-language')}            component={ChooseLanguage} />
        <Route path={ alicePath('/choose-application')}         component={ChooseApplication}/>
        <Route path={ alicePath('/id-dl')}                      component={IDDLWelcome} />
        <Route path={ cdlPath('')}                              component={CDLWelcome} />

        <Route path={ alicePath('/sign-in') }                   component={IDMe} />
        <Route path={ alicePath('/')}                           exact component={Welcome} />
        <Route path={ alicePath('/welcome') }                   component={Welcome} />
        <Route path={ pathForPage('welcome') }                  component={Welcome} />

        <GetStartedRoutes />
        <MyBasicsRoutes />
        <MyHistoryRoutes />

        <Route path={ iddlPath('/organ-donation' ) }            component={OrganDonation} />

        <VotingRoutes />
        <ConclusionRoutes />

        <Route path={ addPath('/driver-license') }                      exact render={(props) => <WhatDoYouWantToDoToday {...props} addressName='addWdywtdt' />}/>
        <Route path={ addPath('/driver-license/current-card-information') } exact render={(props) => <CurrentCardInfo {...props} addressName='addCurrentCardInfo' />}/>
        <Route path={ addPath('/driver-license/updates-and-corrections') } exact render={(props) => <UpdatesCorrects {...props} addressName='addUpdateCorrect' />}/>
        <Route path={ addPath('/driver-license/replacement-details') }  exact render={(props) => <ReplacementDetails {...props} addressName='addReplacementDetails' />}/>
        <Route path={ addPath('/driver-license/type') }                 exact render={(props) => <LicenseType {...props} addressName='addLicenseClass' />} />
        <Route path={ addPath('/driver-license/medical-history') }      exact render={(props) => <MedicalHistory {...props} addressName='addMedicalHistory' />} />
        <Route path={ addPath('/driver-license/license-history') }      exact render={(props) => <CardHistory {...props} addressName='addLicenseHistory'/> } />
        <Route path={ addPath('/driver-license/issue-history') }        exact render={(props) => <LicenseIssues {...props} addressName='addIssueHistory' />} />

        <Route path={ addPath('/id-card') }                             exact render={(props) => <WhatDoYouWantToDoToday {...props} addressName='addIDWdywtdt' />}/>
        <Route path={ addPath('/id-card/current-card-information')}     exact render={(props) => <CurrentCardInfo {...props} addressName='addCurrentIDInfo' />} />
        <Route path={ addPath('/id-card/updates-and-corrections') }     exact render={(props) => <UpdatesCorrects {...props} addressName='addCorrectUpdateID' />} />
        <Route path={ addPath('/id-card/replacement-details') }         exact render={(props) => <ReplacementDetails {...props} addressName='addIDReplacementDetails' />} />
        <Route path={ addPath('/id-card/senior-id') }                   exact render={(props) => <SeniorID {...props} addressName='addSeniorID' />} />
        <Route path={ addPath('/id-card/reduced-fee') }                 exact render={(props) => <ReducedFee {...props} addressName='addReducedFee' />} />
      </div>
    );
  }
}

export default Router;
