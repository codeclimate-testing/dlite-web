'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { iddlPath }                           from '../../helpers/alice-path';
import MedicalHistory                         from './medical-history-form-container.jsx';
import CardHistory                            from './card-history-page.jsx';
import NamesHistory                           from './names-history-form-container.jsx';
import LicenseIssues                          from './license-issues-form-container.jsx';
import VeteransService                        from './veterans-service-form-container.jsx';

const MyHistoryRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/my-history/medical' ) }        exact render={(props) => <MedicalHistory {...props} addressName='medicalHistory' />} />
      <Route path={ iddlPath('/my-history/license-and-id')}   exact render={(props) => <CardHistory {...props} addressName='cardHistory' />} />
      <Route path={ iddlPath('/my-history/names' ) }          component={NamesHistory} />
      <Route path={ iddlPath('/my-history/license-issues')}   exact render={(props) => <LicenseIssues {...props} addressName='licenseIssues' />} />
      <Route path={ iddlPath('/my-history/veterans-service')} component={VeteransService} />
    </div>
    );
};

export default MyHistoryRoutes;