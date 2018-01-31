'use strict';

import React from "react";
import {
  getID
} from '../../../helpers/data/card-type'

const IDApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(getID(props)) { return null; }

  return (
    <div className='summary-section'>
      <p>No application started</p>
    </div>
  );
};

export default IDApplicationNotStarted;

