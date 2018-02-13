'use strict';

import React      from 'react';
import DateInput  from './date-input.jsx';
import translations from '../i18n';

const ExpirationDate = (props) => {
  return (
    <div id='expirationDate'>
      <DateInput
        {...props}
        title       = { translations.shared.labels.expirationDate }
        values      = { props.values }
        validations = { props.validations }
      />
    </div>
  );
};

export default ExpirationDate;
