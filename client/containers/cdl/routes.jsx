'use strict';

import React                            from 'react';
import { Route }                        from 'react-router-dom';
import {
  cdlPath,
  editCDLPath
} from '../../helpers/alice-path';

import CdlWdywtdt                       from './cdl-what-do-you-want-to-do-today-page.jsx';
import UpdatesAndCorrections            from './change-details.jsx';
import CardReplacement                  from './card-replacement.jsx';
import CdlEndorsements                  from './cdl-endorsements.jsx';
import CdlCertificates                  from './cdl-certificates.jsx';
import CdlCurrentLicense                from './my-history/cdl-current-dl.jsx';
import CdlCurrentCard                   from './cdl-current-card.jsx';
import CdlRealID                        from './cdl-real-id.jsx';
import Motorcycle                       from './motorcycle.jsx';
import LicenseClass                     from './license-class.jsx';
import CdlCertification                 from './cdl-certification.jsx';
import MyBasics                         from './my-basics/routes.jsx';
import CDLVoterRegistration             from './voter-registration/routes.jsx';
import CDLHistory                       from './my-history/routes.jsx';
import CdlOrganDonation                 from './cdl-organ-donation.jsx';
import Summary                          from './cdl-summary.jsx';
import AppointmentPrep                  from './appointment-prep.jsx';

const CDLRoutes = () => {
  return (
    <div>

      <Route path={ cdlPath('/what-do-you-want-to-do-today')}           component={CdlWdywtdt}   />
      <Route path={ editCDLPath('/what-do-you-want-to-do-today')}       component={CdlWdywtdt}   />

      <Route path={ cdlPath('/current-card-information')}               component={CdlCurrentCard} />
      <Route path={ editCDLPath('/current-card-information')}           component={CdlCurrentCard} />

      <Route path={ cdlPath('/change-details')}                         component={UpdatesAndCorrections} />
      <Route path={ editCDLPath('/change-details')}                     component={UpdatesAndCorrections} />

      <Route path={ cdlPath('/replacement-details')}                    component={CardReplacement} />
      <Route path={ editCDLPath('/replacement-details')}                component={CardReplacement} />

      <Route path={ cdlPath('/current-ca-license')}                     component={CdlCurrentLicense}  />
      <Route path={ editCDLPath('/current-ca-license')}                 component={CdlCurrentLicense}  />

      <Route path={ cdlPath('/real-id')}                                component={CdlRealID}  />
      <Route path={ editCDLPath('/real-id')}                            component={CdlRealID}  />

      <Route path={ cdlPath('/motorcycle')}                             component={Motorcycle}  />
      <Route path={ editCDLPath('/motorcycle')}                         component={Motorcycle}  />

      <Route path={ cdlPath('/license-class')}                          component={LicenseClass} />
      <Route path={ editCDLPath('/license-class')}                      component={LicenseClass} />

      <Route path={ cdlPath('/self-certification')}                     component={CdlCertification}  />
      <Route path={ editCDLPath('/self-certification')}                 component={CdlCertification}  />

      <Route path={ cdlPath('/endorsements')}                           component={CdlEndorsements} />
      <Route path={ editCDLPath('/endorsements')}                       component={CdlEndorsements} />

      <Route path={ cdlPath('/certificates')}                           component={CdlCertificates} />
      <Route path={ editCDLPath('/certificates')}                       component={CdlCertificates} />

      <Route path={ cdlPath('/organ-donation')}                         component={CdlOrganDonation} />
      <Route path={ editCDLPath('/organ-donation')}                     component={CdlOrganDonation} />

      <CDLHistory />

      <MyBasics />

      <CDLVoterRegistration />

      <Route path={ cdlPath('/summary')}                            component={Summary}     />
      <Route path={ cdlPath('/appointment-preparation') }           component={AppointmentPrep} />
    </div>
  )
};

export default CDLRoutes;
