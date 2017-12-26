'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const CitizenStatus = (props) => {
  let value = props.citizenStatus;

  if(value ==='Skip Section') {
    value = '';
  }
  else if(value ==='No') {
    value = 'False';
  }

  if (!hasValue(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> US Citizen: {value} </p>
    </div>
  );
};

export default CitizenStatus;
