'use strict';

import React from "react";
import { hasValue } from '../../helpers/data/validations';

const SeniorID = (props) => {
  if (!hasValue(props.seniorID)) { return null; }

  return (
    <div className='senior-section'>
      <p>Senior ID: {props.seniorID}</p>
    </div>
  )
};

export default SeniorID;
