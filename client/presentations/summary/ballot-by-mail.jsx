'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const BallotByMail = (props) => {
  let value = props.ballotByMail;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Ballot by mail: {value} </p>
    </div>
  );
};

export default BallotByMail;
