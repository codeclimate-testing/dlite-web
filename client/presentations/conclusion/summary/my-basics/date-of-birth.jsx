'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../Summary-item.jsx';

const DateOfBirth = (props) => {
  if (!dataPresent.date(props.dateOfBirth)) { return null; }

  let dateOfBirth = printDate(props.dateOfBirth);

  return (
    <PageSummaryLink
      name    = {props.editKey}
      summary = {props.summary}
    >
      <SummaryItem
        title = 'Date Of Birth'
        text  = {dateOfBirth}
      />
  </PageSummaryLink>
  );
};

export default DateOfBirth;
