'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const Organ = (props) => {
  let value = props.organ;
  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
    <p> Donate Organs: {value} </p>
    </div>
  );
};

export default Organ;
