'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const HairColor = (props) => {
  let value = props.hairColor;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-page'>
      <p> Hair Color: {value} </p>
    </div>
  );
};

export default HairColor;
