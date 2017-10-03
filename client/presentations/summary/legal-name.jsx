'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const LegalName = (props) => {
  if (!dataPresent.legalName(props.legalName)) { return null; }

  return (
    <div className='summary-section'>
      <p> First Name: {props.legalName.firstName} </p>
      <p> Middle Name: {props.legalName.middleName} </p>
      <p> Last Name: {props.legalName.lastName} </p>
      <p> Suffix: {props.legalName.suffix} </p>
    </div>
  );
};

export default LegalName;
