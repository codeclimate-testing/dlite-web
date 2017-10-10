'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const CitizenStatus = (props) => {
  let value = props.citizenStatus;

  if(value ==='Skip Section') {
    value = '';
  }
  else if(value ==='No') {
    value = 'False';
  }

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> US Citizen: {value} </p>
    </div>
  );
};

export default CitizenStatus;