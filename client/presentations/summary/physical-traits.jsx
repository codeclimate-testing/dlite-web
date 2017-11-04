'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PhysicalTraits = (props) => {
  if (!dataPresent.physicalTraits(props.physicalTraits)) { return null; }

  return (
    <div className='summary-section'>
      <p> Sex: {props.physicalTraits.sex} </p>
      <p> Eye Color: {props.physicalTraits.eyeColor} </p>
      <p> Hair Color: {props.physicalTraits.hairColor} </p>
    </div>
  )
};

export default PhysicalTraits;
