'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const SeniorID = (props) => {
  if (!dataPresent.value(props.seniorID)) { return null; }

  return (
    <div className='senior-section'>
      <p>Senior ID: {props.seniorID}</p>
    </div>
  )

};

export default SeniorID;
