'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const CardType = (props) => {
  let value = props.cardType;

  if (!dataPresent.cardType(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Card Type: {value} </p>
    </div>
  );
};

export default CardType;
