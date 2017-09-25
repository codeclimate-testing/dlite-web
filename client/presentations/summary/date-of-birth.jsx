'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const DateOfBirth = (props) => {
  if (!dataPresent.date(props.dateOfBirth)) { return null; }

  let dateOfBirth = props.dateOfBirth.month + '/' +
    props.dateOfBirth.day + '/' +
    props.dateOfBirth.year;

  return (
    <div className='summary-section'>
      <p>Date of birth: {dateOfBirth}</p>
    </div>
  );
};

export default DateOfBirth;
