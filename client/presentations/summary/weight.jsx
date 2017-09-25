'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const Weight = (props) => {
  let value = props.weight;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p>
        Height: {value} pounds
      </p>
    </div>
  );
};

export default Weight;
