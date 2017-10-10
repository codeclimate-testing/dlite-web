'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const Organ = (props) => {
  if (!dataPresent.organ(props.organ)) { return null; }

  if (props.organ.donate && props.organ.contribute) {
    return (
      <div className='summary-section'>
      <p> Donate Organs: {props.organ.donate} </p>
      <p> Voluntary Contribution: {props.organ.contribute} </p>
      </div>
    );
  } else if (props.organ.donate) {
    return (
      <div className='summary-section'>
      <p> Donate Organs: {props.organ.donate} </p>
      </div>
    );
  } else if (props.organ.contribute) {
    return (
      <div className='summary-section'>
      <p> Voluntary Contribution: {props.organ.contribute} </p>
      </div>
    );
  };
};

export default Organ;
