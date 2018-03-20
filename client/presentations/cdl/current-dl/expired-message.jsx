'use strict';

import React                from 'react';
import MessageBox           from '../../message-box.jsx';
import { expiredCard }      from '../../../helpers/data/cdl';
import Translator           from '../../../i18n/translator-tag.jsx';

const ExpiredMessage = (props) => {
  if (!expiredCard(props.currentCardInfo)) { return null; }
  return (
    <MessageBox className='info'>
      <Translator
        tag             = 'h4'
        translationPath = 'cdl.caDlPage.yesSection.expiredMessage.header'
      />
      <Translator
        tag             = 'p'
        translationPath = 'cdl.caDlPage.yesSection.messageBody'
      />
    </MessageBox>
  )
};

export default ExpiredMessage;
