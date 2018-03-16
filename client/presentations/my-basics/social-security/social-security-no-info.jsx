'use strict';

import React              from 'react';
import MessageBox         from '../../message-box.jsx';
import {
  hasSocialSecurityNo
}   from '../../../helpers/data/ssn';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const NoInfo = (props) => {
  let locale = props.locale;

  if (!hasSocialSecurityNo(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='social-security-no-info'>
        <Translation tag='p'>
          {translations[locale].myBasics.socialSecurityPage.messageNo}
        </Translation>
      </div>
    </MessageBox>
  );
};

export default NoInfo;
