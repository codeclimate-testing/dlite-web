'use strict';

import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { cdlPath }                      from '../../helpers/alice-path';
import CDLWelcome                       from './cdl-welcome.jsx';
import DateOfBirth                      from './my-basics/cdl-date-of-birth.jsx';
import LegalName                        from './my-basics/cdl-legal-name.jsx';
import cdlWdywtdt                       from './cdl-what-do-you-want-to-do-today-page.jsx';
import Residency                        from './my-basics/cdl-residency.jsx';
import cdlCurrentLicense                from './my-history/cdl-current-dl.jsx';
import cdlCurrentCard                   from './cdl-current-card.jsx';
import Summary                          from './cdl-summary.jsx';

const CDLRoutes = () => {
  return (
    <div>
      <Route path= '/apply/cdl'                         exact component={CDLWelcome}  />
      <Route path={ cdlPath('/true-name')}              component={LegalName}   />
      <Route path={ cdlPath('/date-of-birth')}          component={DateOfBirth} />
      <Route path={ cdlPath('/what-do-you-want-to-do-today')} component={cdlWdywtdt} />
      <Route path={ cdlPath('/current-card-information')} component={cdlCurrentCard} />
      <Route path={ cdlPath('/california-residency')}   component={Residency} />
      <Route path={ cdlPath('/current-ca-license')}     component={cdlCurrentLicense} />
      <Route path={ cdlPath('/summary')}                component={Summary}     />
    </div>
  )
};

export default CDLRoutes;
