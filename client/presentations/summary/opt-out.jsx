'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const OptOut = (props) => {
  let value = props.optOut;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
      <p> Choose opt out: {value} </p>
    </div>
  );
};

export default OptOut;
