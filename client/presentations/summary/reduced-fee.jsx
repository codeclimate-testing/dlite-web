'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const ReducedFee = (props) => {
  if (!dataPresent.reducedFee(props.reducedFee)) { return null; }

  let reducedFee = props.reducedFee.ID;

  return (
    <div className='summary-section'>
      <p>Reduced Fee: {reducedFee}</p>
      {
        reducedFee === 'Yes' &&
        <p>Correct Forms for Reduced Fee: {props.reducedFee.form}</p>
      }
    </div>
  );
};

export default ReducedFee;
