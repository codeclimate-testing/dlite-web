'use strict';

import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { cdlPath }                      from '../../helpers/alice-path';
import CDLWelcome                       from './cdl-welcome.jsx';
import DateOfBirth                      from './my-basics/cdl-date-of-birth.jsx';
import PhysicalTraits                   from './my-basics/cdl-physical-traits.jsx';
import HeightWeight                     from './my-basics/cdl-height-weight.jsx';
import LegalName                        from './my-basics/cdl-legal-name.jsx';
import cdlWdywtdt                       from './cdl-what-do-you-want-to-do-today-page.jsx';
import Residency                        from './my-basics/cdl-residency.jsx';
import UpdatesAndCorrections            from './change-details.jsx';
import cdlSocialSecurity                from './my-basics/cdl-social-security.jsx';
import CardReplacement                  from './card-replacement.jsx';
import cdlCurrentLicense                from './my-history/cdl-current-dl.jsx';
import cdlCurrentCard                   from './cdl-current-card.jsx';
import cdlRealID                        from './cdl-real-id.jsx';
import Motorcycle                       from './motorcycle.jsx';
import LicenseClass                     from './license-class.jsx';
import cdlCertification                 from './cdl-certification.jsx';
import CDLHistory                       from './my-history/routes.jsx';
import Summary                          from './cdl-summary.jsx';

const CDLRoutes = () => {
  return (
    <div>
      <Route path= '/apply/cdl'                           exact component={CDLWelcome} />
      <Route path={ cdlPath('/true-name')}                      component={LegalName}   />
      <Route path={ cdlPath('/date-of-birth')}                  component={DateOfBirth} />
      <Route path={ cdlPath('/what-do-you-want-to-do-today')}   component={cdlWdywtdt} />
      <Route path={ cdlPath('/current-card-information')}       component={cdlCurrentCard} />
      <Route path={ cdlPath('/change-details')}                 component={UpdatesAndCorrections} />
      <Route path={ cdlPath('/replacement-details')}            component={CardReplacement} />
      <Route path={ cdlPath('/california-residency')}           component={Residency} />
      <Route path={ cdlPath('/social-security')}                component={cdlSocialSecurity} />
      <Route path={ cdlPath('/current-ca-license')}             component={cdlCurrentLicense} />
      <Route path={ cdlPath('/real-id')}                        component={cdlRealID} />
      <Route path={ cdlPath('/motorcycle')}                     component={Motorcycle} />
      <Route path={ cdlPath('/license-class')}                  component={LicenseClass} />
      <Route path={ cdlPath('/self-certification')}             component={cdlCertification} />

      <CDLHistory />

      <Route path={ cdlPath('/physical-traits')}                component={PhysicalTraits} />
      <Route path={ cdlPath('/traits-height-weight')}           component={HeightWeight} />

      <Route path={ cdlPath('/summary')}                        component={Summary}     />
    </div>
  )
};

export default CDLRoutes;
