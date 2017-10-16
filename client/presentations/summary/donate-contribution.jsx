'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const DonateContribution = (props) => {
  let value = props.donateContribution;
  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
    <p> Voluntary Contribution: {value} </p>
    </div>
  );
};

export default DonateContribution;
