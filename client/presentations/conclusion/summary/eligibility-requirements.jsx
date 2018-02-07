'use strict';

import React from 'react';

import { hasValue } from '../../../helpers/data/validations';
import { getStringByStatus }  from '../../../helpers/data/summary';

const EligibilityRequirements = (props) => {
  let value = props.eligibilityRequirements;
  if (!hasValue(value)) { return null; }

  const yesString = 'Yes';
  const noString = 'No';
  const declineString = 'Decline to answer';
  let text = getStringByStatus(value, yesString, noString, declineString);

  return (
    <div className='summary-section'>
      <p> Voter registration eligibility met: {text} </p>
    </div>
  );
};

export default EligibilityRequirements;
