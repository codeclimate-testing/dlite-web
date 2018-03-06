'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';
import {
  cdlPath,
  editCDLPath
} from '../../../helpers/alice-path';
import MedicalHistory               from './medical-history.jsx';
import NamesHistory                 from './names-history.jsx';
import OtherStateLicenses           from './other-state-licenses.jsx';
import LicenseIssues                from './license-issues.jsx';
import VeteransService              from './cdl-veterans-service.jsx';

const CDLHistory = () => {
  return (
    <div>
      <Route path={ cdlPath('/my-history/medical')}                       component={MedicalHistory} />
      <Route path={ editCDLPath('/my-history/medical')}                   component={MedicalHistory} />

      <Route path={ cdlPath('/my-history/names')}                         component={NamesHistory}  />
      <Route path={ editCDLPath('/my-history/names')}                     component={NamesHistory}  />

      <Route path={ cdlPath('/my-history/other-state-licenses')}          component={OtherStateLicenses} />
      <Route path={ editCDLPath('/my-history/other-state-licenses')}      component={OtherStateLicenses} />

      <Route path={ cdlPath('/my-history/issues')}                        component={LicenseIssues}  />
      <Route path={ editCDLPath('/my-history/issues')}                    component={LicenseIssues}  />

      <Route path={ cdlPath('/my-history/veteran')}                       component={VeteransService} />
      <Route path={ editCDLPath('/my-history/veteran')}                   component={VeteransService}  />
    </div>
  )
};

export default CDLHistory;
