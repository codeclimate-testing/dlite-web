'use strict';

import React      from 'react';
import DateInput  from './date-input.jsx';
import Translator from '../i18n/translator-tag.jsx';

const ExpirationDate = (props) => {

  return (
    <div id='expirationDate'>
      <DateInput
        {...props}
        values      = { props.values }
        validations = { props.validations }
      >
        <Translator tag = 'span' translationPath = 'shared.labels.expirationDate' />
      </DateInput>
    </div>
  );
};

export default ExpirationDate;
