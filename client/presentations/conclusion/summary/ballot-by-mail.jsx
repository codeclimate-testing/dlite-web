'use strict';

import React from 'react';

import { hasValue } from '../../../helpers/data/validations';

const BallotByMail = (props) => {
  if (!hasValue(props.ballotByMail)) { return null; }

  return (
    <div className='summary-section'>
      <p> Ballot by mail: {props.ballotByMail} </p>
    </div>
  );
};

export default BallotByMail;
