'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PreviousNames = (props) => {
  if (!dataPresent.previousNames(props.previousNames)) { return null; }

  return (
    <div className='summary-section'>
      <p> Previously Used Names: {props.previousNames.names} </p>
    </div>
  );
};

export default PreviousNames;
