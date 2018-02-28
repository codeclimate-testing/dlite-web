'use strict';

import React      from 'react';
import DateInput  from './date-input.jsx';
import translations from '../i18n';

const ExpirationDate = (props) => {
  let locale = props.locale;
  return (
    <div id='expirationDate'>
      <DateInput
        {...props}
        title       = { translations[locale].shared.labels.expirationDate }
        values      = { props.values }
        validations = { props.validations }
      />
    </div>
  );
};

export default ExpirationDate;
