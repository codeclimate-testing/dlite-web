'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const CardType = (props) => {
  if (!dataPresent.cardType(props.cardType)) { return null; }

  let values = [];

  if(props.cardType.DL) {
    values.push('Driver License');
  }

  if(props.cardType.ID) {
    values.push('ID');
  }

  let tag = values.length >= 2 ? 'Card Types' : 'Card Type';

  return (
    <div className='summary-section'>
      <p> {tag}: {values.join(' and ')} </p>
    </div>
  );
};

export default CardType;
