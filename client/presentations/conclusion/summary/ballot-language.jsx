'use strict';

import React from 'react';

import { hasValue } from '../../../helpers/data/validations';

const BallotLanguage = (props) => {
  if (!hasValue(props.ballotLanguage)) { return null; }

  return (
    <div className='summary-section'>
      <p> Ballot language preference: {props.ballotLanguage} </p>
    </div>
  );
};

export default BallotLanguage;
