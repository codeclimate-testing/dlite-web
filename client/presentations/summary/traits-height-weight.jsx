'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const TraitsHeightWeight = (props) => {
  if (!dataPresent.traitsHeightWeight(props.traitsHeightWeight)) { return null; }

  let inches = props.traitsHeightWeight.inches || 0;

  return (
    <div className='summary-section'>
      <p>Height: {props.traitsHeightWeight.feet} feet {inches} inches</p>
      <p>Weight: {props.traitsHeightWeight.weight} pounds</p>
    </div>
  );
};

export default TraitsHeightWeight;
