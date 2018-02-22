'use strict';

import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { cdlPath }                     from '../../helpers/alice-path';
import CDLWelcome                       from './cdl-welcome.jsx';
import DateOfBirth                      from './cdl-date-of-birth.jsx';
import LegalName                        from './cdl-legal-name.jsx';

const CDLRoutes = () => {
  return (
    <div>
      <Route path={ cdlPath('')}                              component={CDLWelcome}  />
      <Route path={ cdlPath('/true-name')}                    component={LegalName}   />
      <Route path={ cdlPath('/date-of-birth')}                component={DateOfBirth} />
    </div>
  )
};

export default CDLRoutes;