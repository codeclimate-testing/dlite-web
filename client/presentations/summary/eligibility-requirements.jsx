'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const EligibilityRequirements = (props) => {
  let value = props.eligibilityRequirements;

  if(value === 'Skip Section') {
    value = 'No Answer';
  }

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Voter registration eligibility met: {value} </p>
    </div>
  );
};

export default EligibilityRequirements;
