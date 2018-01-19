'use strict';

import React            from 'react';
import { printDate }    from '../../../helpers/print-date';
import { hasValue }     from '../../../helpers/data/validations';

const LicenseIssues = (props) => {
  let isSuspended = props.licenseIssues.isSuspended;
  if (!hasValue(isSuspended)) { return null; }

  let date        = printDate(props.licenseIssues);
  let reason      = props.licenseIssues.reason;

  if(isSuspended !== 'Yes') {
    if(isSuspended === 'No')
    return (
      <div className='summary-section'>
        <p> Have suspended license: {isSuspended} </p>
      </div>
    );
  }

  return (
    <div className='summary-section'>
      <p> Have suspended license: {isSuspended} </p>
      <p> Suspended license date: {date} </p>
      <p> Suspended license reason: {reason} </p>
    </div>
  );
};

export default LicenseIssues;
