'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const SuspendedLicense = (props) => {
  if (!dataPresent.suspendedLicense(props.suspendedLicense)) { return null; }

  let date = props.suspendedLicense.month + '/' +
             props.suspendedLicense.day + '/' +
             props.suspendedLicense.year;
  let reason = props.suspendedLicense.reason;

  return (
    <div className='summary-section'>
      <p>Suspended license date: {date}</p>
      <p>Suspended license reason: {reason} </p>
    </div>
  );
};

export default SuspendedLicense;
