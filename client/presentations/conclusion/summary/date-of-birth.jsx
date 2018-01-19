'use strict';

import React            from "react";
import * as dataPresent from '../../../helpers/data-present';
import { printDate }    from '../../../helpers/print-date';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const DateOfBirth = (props) => {
  if (!dataPresent.date(props.dateOfBirth)) { return null; }

  let dateOfBirth = printDate(props.dateOfBirth);

  return (
    <PageSummaryLink
      to='/my-basics/date-of-birth'
      name='dateOfBirth'
    >
      <SummaryItem
        title='Date Of Birth'
        text={dateOfBirth}
      />
  </PageSummaryLink>
  );
};

export default DateOfBirth;
