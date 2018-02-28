'use strict';

import React              from 'react';
import MessageBox         from '../../message-box.jsx';
import {
  hasSocialSecurityNo
}   from '../../../helpers/data/ssn';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const NoInfo = (props) => {
  let locale = props.locale;
  let translationPath = translations[locale].myBasics.socialSecurityPage;

  if (!hasSocialSecurityNo(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='social-security-no-info'>
        {convertToHtml('p', translationPath.messageNo)}
      </div>
    </MessageBox>
  );
};

export default NoInfo;
