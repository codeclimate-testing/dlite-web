'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';
import { cdlPath }                  from '../../../helpers/alice-path';
import medicalHistory               from './medical-history.jsx';
import namesHistory                 from './names-history.jsx';

const CDLHistory = () => {
  return (
    <div>
      <Route path={ cdlPath('/my-history/medical')}  component={medicalHistory} />
      <Route path={ cdlPath('/my-history/names')}    component={namesHistory} />
    </div>
  )
};

export default CDLHistory;
