'use strict'

import React                    from 'react';
import MessageBox               from '../message-box.jsx';
import { showCDLUnder21 }       from '../../helpers/data/cdl';
import translations           from '../../i18n';
import Translation            from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  if (!showCDLUnder21(props)) { return null; }
  return (
    <MessageBox
      className = 'info'
    >
      <Translation tag='p' className='cdl-under-21'>
        {translations[locale].cdl.dateOfBirthPage.under21Message}
      </Translation>
    </MessageBox>
  );
};

export default Form;
