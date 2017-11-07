'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const DlidHistory = (props) => {

  let isIssued        = props.dlidHistory.isIssued;
  if (!dataPresent.dlidHistory(props.dlidHistory)) { return null; }

  let date           = props.dlidHistory.month + '/' +
                       props.dlidHistory.day + '/' +
                       props.dlidHistory.year;

  let DLIDNumber      = props.dlidHistory.DLIDNumber;
  let issuedBy        = props.dlidHistory.issuedBy;

  if(isIssued !== 'Yes') {
    if(isIssued === 'No') 
    return (
    <div className='summary-section'>
      <p> Have suspended license: {isIssued} </p>
    </div>
  );
}
  return (
    <div className='summary-section'>
      <p>Has existing DL/ID: {isIssued} </p>
      <p>Existing DL/ID number: {DLIDNumber}</p>
      <p>Existing DL/ID issued by: {issuedBy} </p>
      <p>Existing DL/ID expiration date: {date}</p>
    </div>
  );
};

export default DlidHistory;