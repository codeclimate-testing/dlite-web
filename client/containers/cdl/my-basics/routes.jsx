'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';
import { cdlPath }                  from '../../../helpers/alice-path';
import PhysicalTraits               from './cdl-physical-traits.jsx';
import HeightWeight                 from './cdl-height-weight.jsx';

const MyHistory = () => {
  return (
    <div>
      <Route path={ cdlPath('/physical-traits')}            component={PhysicalTraits} />
      <Route path={ cdlPath('/traits-height-weight')}       component={HeightWeight} />
    </div>
  )
};

export default MyHistory;