'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PreviousNames = (props) => {
  let value = props.previousNames;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
      <p> Ever used previous names: {value} </p>
    </div>
  );
};

export default PreviousNames;
