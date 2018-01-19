'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';

const PreviousNames = (props) => {
  if(props.namesHistory.hasUsedPreviousNames === 'No'){ return null; }
  return <p> Previous Names: { props.namesHistory.previousNames } </p>
}

const NamesHistory = (props) => {
  if (!(dataPresent.hasPreviousNames(props.namesHistory))) { return null; }

  return (
    <div className='summary-section'>
      <p> Has used previous names: { props.namesHistory.hasUsedPreviousNames } </p>
      <PreviousNames 
        namesHistory = { props.namesHistory }
      />
    </div>
  );
};

export default NamesHistory;
