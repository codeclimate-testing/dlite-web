'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PoliticalPartyPreference = (props) => {
  let value = props.politicalPartyPreference;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
      <p> Political party preference: {value} </p>
    </div>
  );
};

export default PoliticalPartyPreference;
