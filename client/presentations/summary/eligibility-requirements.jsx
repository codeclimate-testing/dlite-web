'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const EligibilityRequirements = (props) => {
  let value = props.eligibilityRequirements;

  if (!hasValue(value)) { return null; }

  if(props.eligibilityRequirements === 'decline') {
    value = 'Decline to answer';
  }

  return (
    <div className='summary-section'>
      <p> Voter registration eligibility met: {value} </p>
    </div>
  );
};

export default EligibilityRequirements;
