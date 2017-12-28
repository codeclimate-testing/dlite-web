'use strict';

import React            from "react";
import * as dataPresent from '../../helpers/data-present';
import { printDate }    from '../../helpers/print-date';

const DateOfBirth = (props) => {
  if (!dataPresent.date(props.dateOfBirth)) { return null; }

  let dateOfBirth = printDate(props.dateOfBirth);

  return (
    <div className='summary-section'>
      <p>Date of birth: {dateOfBirth}</p>
    </div>
  );
};

export default DateOfBirth;
