'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const CitizenStatus = (props) => {
  let value = props.citizenStatus;

  if (!hasValue(value)) { return null; }

  if(props.citizenStatus === 'decline') {
    value = 'Decline to answer';
  }

  return (
    <div className='summary-section'>
      <p> US Citizen: {value} </p>
    </div>
  );
};

export default CitizenStatus;
