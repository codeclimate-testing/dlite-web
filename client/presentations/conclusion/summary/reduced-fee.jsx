'use strict';

import React from "react";
import * as dataPresent from '../../../helpers/data-present';

const Forms = (props) => {
  if (!dataPresent.value(props.form)){ return null; }
  return <p>Correct Forms for Reduced Fee: {props.form}</p>
}

const ReducedFee = (props) => {
  if (!dataPresent.value(props.reducedFee.ID)) { return null; }

  return (
    <div className='summary-section'>
      <p>Reduced Fee: {props.reducedFee.ID}</p>
      <Forms form={ props.reducedFee.form } />
    </div>
  );
};

export default ReducedFee;
