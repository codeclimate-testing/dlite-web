'use strict';
import React                    from 'react';
import MessageBox               from '../../message-box.jsx';
import { notResident }          from '../../../helpers/data/cdl';
import Translator               from '../../../i18n/translator-tag.jsx';

const NoMessage = (props) => {
  if (!notResident(props.residency)) { return null; }
  return (
    <MessageBox className = 'info'>
      <Translator
        tag             = 'h4'
        translationPath = 'cdl.californiaResidentPage.infoMessageNo.header'
      />
      <Translator
        tag             = 'p'
        translationPath = 'cdl.californiaResidentPage.infoMessageNo.explanation'
      />
      <Translator
        tag             = 'p'
        translationPath = 'sharedAdditions.shared.contactDMV'
      />
    </MessageBox>
  );
};

export default NoMessage;
