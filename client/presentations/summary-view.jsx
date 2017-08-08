'use strict';

import React from "react";
import { Link } from 'react-router-dom';

export const SummaryEmpty = (props) => {
  return (
    <div className='summary-page'>
      <Link to='/' >Back to application</Link>
      <p>No information has been entered yet</p>
    </div>
  );
}

export const SummaryNames = (props) => {
  return (
    <div className='summary-page'>
      <Link to='/' >Back to application</Link>
      <p> First Name: {props.legalName.firstName} </p>
      <p> Middle Name: {props.legalName.middleName} </p>
      <p> Last Name: {props.legalName.lastName} </p>
    </div>
  )
}