'use strict'

import React                    from 'react';
import MessageBox               from '../message-box.jsx';
import { showCDLUnder21 }       from '../../helpers/data/cdl';
import Translator               from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (!showCDLUnder21(props)) { return null; }
  return (
    <MessageBox
      className = 'info'
    >
      <Translator
        tag             = 'p'
        className       = 'cdl-under-21'
        translationPath = 'cdl.dateOfBirthPage.under21Message'
      />
    </MessageBox>
  );
};

export default Form;
