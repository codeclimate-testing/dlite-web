'use strict';

import React from "react";
import {
  getDL
} from '../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(getDL(props)) { return null; }

  return (
    <div className='summary-section'>
      <p>No application started</p>
    </div>
  );
};

export default DLApplicationNotStarted;

