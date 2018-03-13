'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';
import {
  cdlPath,
  editCDLPath
 } from '../../../helpers/alice-path';
import PhysicalTraits               from './cdl-physical-traits.jsx';
import HeightWeight                 from './cdl-height-weight.jsx';

const MyHistory = () => {
  return (
    <div>
      <Route path={ cdlPath('/physical-traits')}              component={PhysicalTraits}   />
      <Route path={ editCDLPath('/physical-traits')}          component={PhysicalTraits}   />

      <Route path={ cdlPath('/traits-height-weight')}         component={HeightWeight}    />
      <Route path={ editCDLPath('/traits-height-weight')}     component={HeightWeight}    />
    </div>
  )
};

export default MyHistory;