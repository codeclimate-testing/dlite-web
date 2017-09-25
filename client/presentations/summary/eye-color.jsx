'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const EyeColor = (props) => {
  let value = props.eyeColor;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
      <p> Eye Color: {value} </p>
    </div>
  );
};

export default EyeColor;
