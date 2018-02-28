'use strict';

import React                from 'react';
import MessageBox           from '../../message-box.jsx';
import { firstTime }        from '../../../helpers/data/cdl';

const NoMessage = (props) => {
  if (!firstTime(props)) { return null; }
  return (
    <MessageBox className='info'>
      <p>In order to get your Commercial Learner’s Permit, you’ll need to first pass the knowledge and driving skills tests for a basic (Non-Commercial Class C) driver license. </p>
    </MessageBox>
  );
};

export default NoMessage;