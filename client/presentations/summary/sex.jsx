'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const Sex = (props) => {
  let value = props.sex;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Sex: {props.sex} </p>
    </div>
  )
};

export default Sex;
