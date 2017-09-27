'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const Height = (props) => {
  if (!dataPresent.height(props.height)) { return null; }

  let inches = props.height.inches || 0;

  return (
    <div className='summary-section'>
      <p>
        Height: {props.height.feet} feet {inches} inches
      </p>
    </div>
  );
};

export default Height;
