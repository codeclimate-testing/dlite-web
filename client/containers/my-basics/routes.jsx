'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { iddlPath }                           from '../../helpers/alice-path';
import Address                                from './address-page.jsx';
import TraitsHeightWeight                     from './traits-height-weight-form-container.jsx';
import PhysicalTraits                         from './physical-traits-form-container.jsx';
import SocialSecurity                         from './social-security-form-container.jsx';

const MyBasicsRoutes = () => {
  return (
    <div>
      <Route path={ iddlPath('/my-basics/address') }          component={Address} />
      <Route path={ iddlPath('/my-basics/traits-height-weight')} component={TraitsHeightWeight} />
      <Route path={ iddlPath('/my-basics/physical-traits') }  component={PhysicalTraits} />
      <Route path={ iddlPath('/my-basics/social-security' ) } component={SocialSecurity} />
    </div>
  );
};

export default MyBasicsRoutes;