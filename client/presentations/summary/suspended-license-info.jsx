'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const SuspendedLicenseInfo = (props) => {
  if (!dataPresent.suspendedLicenseInfo(props.suspendedLicenseInfo)) { return null; }

  let date = props.suspendedLicenseInfo.month + '/' +
             props.suspendedLicenseInfo.day + '/' +
             props.suspendedLicenseInfo.year;
  let reason = props.suspendedLicenseInfo.reason;

  return (
    <div className='summary-section'>
      <p>Suspended license date: {date}</p>
      <p>Suspended license reason: {reason} </p>
    </div>
  );
};

export default SuspendedLicenseInfo;
