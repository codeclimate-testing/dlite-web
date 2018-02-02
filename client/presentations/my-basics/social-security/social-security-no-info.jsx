'use strict';

import React              from 'react';
import MessageBox         from '../../message-box.jsx';
import translations       from '../../../i18n';
import {
  hasSocialSecurityNo
}   from '../../../helpers/data/ssn';

let translationPath = translations.myBasics.socialSecurityPage;

const NoInfo = (props) => {
  if (!hasSocialSecurityNo(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='social-security-no-info'>
        <p>{translationPath.messageNo}</p>
        <p className='translation-missing'>
          You understand that pursuant to California Vehicle Code §12801, you must provide your Social Security Number to the Department of Motor Vehicles when one is assigned to you. Read the disclaimer for more information.
        </p>
      </div>
    </MessageBox>
  );
};

export default NoInfo;
