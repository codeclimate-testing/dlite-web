'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';
import {
  cdlPath,
  editCDLPath
 } from '../../../helpers/alice-path';
import PhysicalTraits               from './cdl-physical-traits.jsx';
import HeightWeight                 from './cdl-height-weight.jsx';
import DateOfBirth                  from './cdl-date-of-birth.jsx';
import LegalName                    from './cdl-legal-name.jsx';
import Residency                    from './cdl-residency.jsx';
import CdlSocialSecurity            from './cdl-social-security.jsx';

const MyHistory = () => {
  return (
    <div>
      <Route path={ cdlPath('/my-basics/physical-traits')}              component={PhysicalTraits}   />
      <Route path={ editCDLPath('/my-basics/physical-traits')}          component={PhysicalTraits}   />

      <Route path={ cdlPath('/my-basics/traits-height-weight')}         component={HeightWeight}    />
      <Route path={ editCDLPath('/my-basics/traits-height-weight')}     component={HeightWeight}    />

      <Route path={ cdlPath('/my-basics/true-name')}                    component={LegalName}  />
      <Route path={ editCDLPath('/my-basics/true-name')}                component={LegalName}  />

      <Route path={ cdlPath('/my-basics/date-of-birth')}                component={DateOfBirth}  />
      <Route path={ editCDLPath('/my-basics/date-of-birth')}            component={DateOfBirth}  />

      <Route path={ cdlPath('/my-basics/california-residency')}         component={Residency}   />
      <Route path={ editCDLPath('/my-basics/california-residency')}     component={Residency}   />

      <Route path={ cdlPath('/my-basics/social-security')}              component={CdlSocialSecurity}  />
      <Route path={ editCDLPath('/my-basics/social-security')}          component={CdlSocialSecurity}  />
    </div>
  )
};

export default MyHistory;