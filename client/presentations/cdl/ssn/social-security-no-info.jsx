'use strict';

import React              from 'react';
import MessageBox         from '../../message-box.jsx';
import {
  hasSocialSecurityNo
}   from '../../../helpers/data/ssn';

const NoInfo = (props) => {

  if (!hasSocialSecurityNo(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='social-security-no-info'>
        <h4 className='translation-missing'>We’re sorry, but you do not qualify for a California CDL at this time.</h4>
        <p className='translation-missing'>Commercial Drivers must have a Social Security Number and are required to provide proof upon application. Both US citizens and non-citizen residents with legal presence are eligible to receive a Social Security Number. Contact the Social Security Administration for more information.</p>
        <p>Please contact the DMV if you have further questions.<br />
        Telephone: 1-800-777-0133</p>
        <p className='translation-missing'>Hearing Impaired: TTY 1-800-368-4327</p>
      </div>
    </MessageBox>
  );
};

export default NoInfo;
