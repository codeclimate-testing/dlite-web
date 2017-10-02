'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const BallotLanguage = (props) => {
  let value = props.ballotLanguage;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Ballot language preference: {value} </p>
    </div>
  );
};

export default BallotLanguage;
