'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const RealID = (props) => {
  if (!dataPresent.realID(props.realID)) { return null; }

  let realID = props.realID.getRealID;

  return (
    <div className='summary-section'>
      <p>Real ID: {realID}</p>
    </div>
  );
};

export default RealID;
