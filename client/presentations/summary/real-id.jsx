'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const RealID = (props) => {
  if (!dataPresent.realID(props.realID)) { return null; }

  let realID = props.realID.getRealID;
  let designation = props.realID.realIdDesignation

  if(realID === 'Yes' && designation) {
    return (
      <div className='summary-section'>
        <p>Real ID: {realID}</p>
        <p>Real ID Designation: {designation}</p>
      </div>
    );
  } else {
    return (
      <div className='summary-section'>
        <p>Real ID: {realID}</p>
      </div>
    );
  };
};

export default RealID;
