'use strict';

import React                from 'react';
import MessageBox           from '../../message-box.jsx';
import { firstTime }        from '../../../helpers/data/cdl';
import Translator           from '../../../i18n/translator-tag.jsx';

const NoMessage = (props) => {
  if (!firstTime(props)) { return null; }
  return (
    <MessageBox className='info'>
      <Translator
        tag             = 'p'
        translationPath = 'cdl.caDlPage.noMessage'
      />
    </MessageBox>
  );
};

export default NoMessage;
