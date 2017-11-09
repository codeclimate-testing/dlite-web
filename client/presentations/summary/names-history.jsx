'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const NamesHistory = (props) => {
  let hasUsedPreviousNames = props.namesHistory.hasUsedPreviousNames;
  if (!(dataPresent.hasPreviousNames(props.namesHistory))) { return null; }

  if(hasUsedPreviousNames === 'No') {
    return (
      <div className='summary-section'>
        <p> Has used previous names: {hasUsedPreviousNames} </p>
      </div>
    );
  }

  return (
    <div className='summary-section'>
      <p> Has used previous names: {hasUsedPreviousNames} </p>
      <p> Previous Names: {props.namesHistory.previousNames} </p>
    </div>
  );
};

export default NamesHistory;
