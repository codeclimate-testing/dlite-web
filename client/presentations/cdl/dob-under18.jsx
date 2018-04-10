'use strict'

import React                    from 'react';
import MessageBox               from '../message-box.jsx';
import { showCDLUnder18 }       from '../../helpers/data/cdl';
import Translator               from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (!showCDLUnder18(props)) { return null; }
  return (
    <MessageBox
      className = 'info'
    >
      <Translator
        tag             = 'h4'
        className       = 'cdl-under-18'
        translationPath = 'cdl.californiaResidentPage.infoMessageNo.header'
      />

      <Translator
        tag             = 'p'
        className       = 'cdl-under-18'
        translationPath = 'ageMessages.cdlAgeRestriction'
      />

    </MessageBox>
  );
};

export default Form;
