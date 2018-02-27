'use strict';
import React                    from 'react';
import MessageBox               from '../../message-box.jsx';
import { notResident }          from '../../../helpers/data/cdl';

const NoMessage = (props) => {
  if (!notResident(props.residency)) { return null; }
  return (
    <MessageBox className = 'info'>
      <h4>We’re sorry, but you do not qualify for a California CDL at this time.</h4>
      <p>You must be a California resident to apply.</p>
      <p>Please contact the DMV if you have further questions.</p>
      <p>Telephone: 1-800-777-0133</p>
      <p>Hearing Impaired: TTY 1-800-368-4327</p>
    </MessageBox>
  );
};

export default NoMessage;
