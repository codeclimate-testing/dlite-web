'use strict';

import React              from 'react';
import MessageBox         from '../../message-box.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';
import {
  hasSocialSecurityNo
}   from '../../../helpers/data/ssn';

const NoInfo = (props) => {
  if (!hasSocialSecurityNo(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='social-security-no-info'>
        <Translator
          tag             = 'p'
          translationPath = 'myBasics.socialSecurityPage.messageNo'
        />
      </div>
    </MessageBox>
  );
};

export default NoInfo;
