'use strict';

import React                from 'react';
import MessageBox           from '../../message-box.jsx';
import { expiredCard }      from '../../../helpers/data/cdl';

const ExpiredMessage = (props) => {
  if (!expiredCard(props.currentCardInfo)) { return null; }
  return (
    <MessageBox className='info'>
      <h4>We see your driver license is expired. </h4>
      <p>In order to get your Commercial Learner's Permit (CLP), you'll need to obtain a California Non-Commercial Class C driver license.  To do this, you will need to pass the Non-Commercial Class C knowledge test.</p>
    </MessageBox>
  )
};

export default ExpiredMessage;