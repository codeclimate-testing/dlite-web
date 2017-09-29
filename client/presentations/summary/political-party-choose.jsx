'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PoliticalPartyChoose = (props) => {
  let value = props.politicalPartyChoose;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
      <p> Choose political party: {value} </p>
    </div>
  );
};

export default PoliticalPartyChoose;
