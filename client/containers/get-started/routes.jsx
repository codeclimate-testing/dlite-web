'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
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
import IDMe                                   from './id-me-page.jsx';

import {
  iddlPath,
  addPath,
  editPath
} from '../../helpers/alice-path';


const GetStartedRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/sign-in') }                        component={IDMe} />

      <Route path={ iddlPath('/my-basics/date-of-birth') }        component={DateOfBirth}             />
      <Route path={ editPath('/my-basics/date-of-birth') }        component={DateOfBirth}             />

      <Route path={ iddlPath('/what-do-you-want-to-do-today') }   component={WhatDoYouWantToDoToday}  />
      <Route path={ editPath('/what-do-you-want-to-do-today') }   component={WhatDoYouWantToDoToday}  />
      <Route path={ addPath('/what-do-you-want-to-do-today') }    component={WhatDoYouWantToDoToday}  />

      <Route path={ iddlPath('/select-id-dl') }                   component={ChooseCard}              />

      <Route path={ iddlPath('/current-card-information') }       component={CurrentCardInfo}         />
      <Route path={ editPath('/current-card-information') }       component={CurrentCardInfo}         />
      <Route path={ addPath('/current-card-information') }        component={CurrentCardInfo}         />

      <Route path={ iddlPath('/updates-and-corrections') }        component={UpdatesCorrects}         />
      <Route path={ editPath('/updates-and-corrections') }        component={UpdatesCorrects}         />
      <Route path={ addPath('/updates-and-corrections') }         component={UpdatesCorrects}         />

      <Route path={ iddlPath('/replacement-details') }            component={ReplacementDetails}      />
      <Route path={ editPath('/replacement-details') }            component={ReplacementDetails}      />
      <Route path={ addPath('/replacement-details') }             component={ReplacementDetails}      />

      <Route path={ iddlPath('/senior-id') }                      component={SeniorID}                />
      <Route path={ editPath('/senior-id') }                      component={SeniorID}                />
      <Route path={ addPath('/senior-id') }                       component={SeniorID}                />

      <Route path={ iddlPath('/youth-license-notification') }     component={YouthLicenseNotification}  />
      <Route path={ editPath('/youth-license-notification') }     component={YouthLicenseNotification}  />

      <Route path={ iddlPath('/real-id') }                        component={RealID}                  />
      <Route path={ editPath('/real-id') }                        component={RealID}                  />
      <Route path={ addPath('/real-id') }                         component={RealID}                  />

      <Route path={ iddlPath('/license-type') }                   component={LicenseType}             />
      <Route path={ editPath('/license-type') }                   component={LicenseType}             />
      <Route path={ addPath('/license-type') }                    component={LicenseType}             />

      <Route path={ iddlPath('/reduced-fee')}                     component={ReducedFee}              />
      <Route path={ editPath('/reduced-fee')}                     component={ReducedFee}              />
      <Route path={ addPath('/reduced-fee')}                      component={ReducedFee}              />

      <Route path={ iddlPath('/get-started') }                    component={GetStarted}              />
    </div>
    );
};

export default GetStartedRoutes;