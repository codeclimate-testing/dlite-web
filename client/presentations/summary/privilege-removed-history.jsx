'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const PrivilegeRemovedHistory = (props) => {

  let isSuspended = props.privilegeRemovedHistory.isSuspended;
  if (!dataPresent.value(isSuspended)) { return null; }
  
  let date        = props.privilegeRemovedHistory.month + '/' +
                    props.privilegeRemovedHistory.day + '/' +
                    props.privilegeRemovedHistory.year;

  let reason      = props.privilegeRemovedHistory.reason;
  
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

export default PrivilegeRemovedHistory;
