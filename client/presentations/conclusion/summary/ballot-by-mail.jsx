'use strict';

import React from 'react';

import { ballotByMailSelected } from '../../../helpers/data/voting';

const BallotByMail = (props) => {
  if (!ballotByMailSelected(props)) { return null; }

  return (
    <div className='summary-section'>
      <p> Ballot by mail: {props.ballotByMail} </p>
    </div>
  );
};

export default BallotByMail;
