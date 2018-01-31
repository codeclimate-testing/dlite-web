'use strict';

import React      from 'react';
import DateInput  from './date-input.jsx';

const ExpirationDate = (props) => {
  return (
    <div id='expirationDate'>
      <DateInput
        {...props}
        title       = 'Expiration Date'
        values      = { props.values }
        validations = { props.validations }
      />
    </div>
  );
};

export default ExpirationDate;
