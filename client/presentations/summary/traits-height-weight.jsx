'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const TraitsHeightWeight = (props) => {
  if (!dataPresent.traitsHeightWeight(props.traitsHeightWeight)) { return null; }

  let heightInches = props.traitsHeightWeight.heightInches || 0;

  return (
    <div className='summary-section'>
      <p>Height: {props.traitsHeightWeight.heightFeet} feet {heightInches} inches</p>
      <p>Weight: {props.traitsHeightWeight.weight} pounds</p>
    </div>
  );
};

export default TraitsHeightWeight;
