'use strict';

import React              from 'react';
import MessageBox         from '../../message-box.jsx';
import {
  hasSocialSecurityNo
}   from '../../../helpers/data/ssn';
import Translator         from '../../../i18n/translator-tag.jsx';

const NoInfo = (props) => {
  if (!hasSocialSecurityNo(props)) { return null; }
  return (
    <MessageBox className='info'>
      <div className='social-security-no-info'>
      <Translator
        tag             = 'h4'
        translationPath = 'cdl.socialSecurityPage.noMessage.header'
      />
      <Translator
        tag             = 'p'
        translationPath = 'cdl.socialSecurityPage.noMessage.explanation'
      />
      <Translator
        tag             = 'p'
        translationPath = 'sharedAdditions.shared.contactDMV'
      />
      </div>
    </MessageBox>
  );
};

export default NoInfo;
