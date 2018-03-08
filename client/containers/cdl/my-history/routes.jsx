'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';
import { cdlPath }                  from '../../../helpers/alice-path';
import medicalHistory               from './medical-history.jsx';
import namesHistory                 from './names-history.jsx';
import otherStateLicenses           from './other-state-licenses.jsx';
import licenseIssues                from './license-issues.jsx';

const CDLHistory = () => {
  return (
    <div>
      <Route path={ cdlPath('/my-history/medical')}  component={medicalHistory} />
      <Route path={ cdlPath('/my-history/names')}    component={namesHistory} />
      <Route path={ cdlPath('/my-history/other-state-licenses')}    component={otherStateLicenses} />
      <Route path={ cdlPath('/my-history/issues')}    component={licenseIssues} />
    </div>
  )
};

export default CDLHistory;
