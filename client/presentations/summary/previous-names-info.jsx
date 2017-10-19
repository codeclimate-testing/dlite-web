'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PreviousNamesInfo = (props) => {
  if (!dataPresent.previousNamesInfo(props.previousNamesInfo)) { return null; }


  return (
    <div className='summary-section'>
      <p> Ever used previous names: {props.previousNamesInfo.hasPreviousNames} </p>
      <p> Previously Used Names: {props.previousNamesInfo.names} </p>
    </div>
  );
};

export default PreviousNamesInfo;
