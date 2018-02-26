'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import LegalName                              from './name-page.jsx';
import DateOfBirth                            from './date-of-birth-page.jsx';
import WhatDoYouWantToDoToday                 from './what-do-you-want-to-do-today-page.jsx';
import ChooseCard                             from './choose-card-page.jsx';
import ReplacementDetails                     from './replacement-details-page.jsx';
import CurrentCardInfo                        from './current-card-page.jsx';
import UpdatesCorrects                        from './correct-or-update-page.jsx';
import YouthLicenseNotification               from './youth-license-notification-page.jsx';
import SeniorID                               from './senior-id-page.jsx';
import RealID                                 from './real-id-page.jsx';
import LicenseType                            from './license-type-page.jsx';
import ReducedFee                             from './reduced-fee-page.jsx';
import GetStarted                             from './get-started-page.jsx';
import {
  iddlPath,
  addPath
 }                           from '../../helpers/alice-path';


const GetStartedRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/my-basics/legal-name') }       component={LegalName} />
      <Route path={ iddlPath('/my-basics/date-of-birth') }    component={DateOfBirth} />
      <Route path={ iddlPath('/what-do-you-want-to-do-today') } exact render={(props) => <WhatDoYouWantToDoToday {...props} addressName='wdywtdt' />} />
      <Route path={ iddlPath('/select-id-dl') }               component={ChooseCard} />
      <Route path={ iddlPath('/current-card-information') }   exact render={(props) => <CurrentCardInfo {...props} addressName='currentCardInfo' />}/>
      <Route path={ iddlPath('/updates-and-corrections') }    exact render={(props) => <UpdatesCorrects {...props} addressName='updateAndCorrect' />} />
      <Route path={ iddlPath('/replacement-details') }        exact render={(props) => <ReplacementDetails {...props} addressName='replacementDetails' />} />
      <Route path={ iddlPath('/senior-id') }                  exact render={(props) => <SeniorID addressName='seniorID' {...props}/>}/>
      <Route path={ iddlPath('/youth-license-notification') } component={YouthLicenseNotification} />
      <Route path={ iddlPath('/real-id') }                    component={RealID} />
      <Route path={ addPath('/driver-license/real-id') }      component={RealID} />
      <Route path={ addPath('/id-card/real-id') }             component={RealID} />
      <Route path={ iddlPath('/license-type') }               exact render={(props) => <LicenseType {...props} addressName='chooseLicenseClass'/>}/>
      <Route path={ iddlPath('/reduced-fee')}                 exact render={(props) => <ReducedFee {...props} addressName='reducedFeeID' />}/>
      <Route path={ iddlPath('/get-started') }                component={GetStarted} />
    </div>
    );
};

export default GetStartedRoutes;