'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';
import PageSummary  from '../page-summary.jsx';

const LegalName = (props) => {
  if (!dataPresent.legalName(props.legalName)) { return null; }

  return (
    <PageSummary 
      to='/my-basics/legal-name'
    >
      <p> First Name: {props.legalName.firstName} </p>
      <p> Middle Name: {props.legalName.middleName} </p>
      <p> Last Name: {props.legalName.lastName} </p>
      <p> Suffix: {props.legalName.suffix} </p>
    </PageSummary>
  );
};

export default LegalName;
