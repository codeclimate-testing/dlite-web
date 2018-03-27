'use strict';

import React            from 'react';
import { printDate }    from '../../../../helpers/print-date';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  licenseIssuesIsSuspended
} from '../../../../helpers/data/my-history';

const LicenseIssues = (props) => {
  if (!dataPresent.licenseIssues(props.licenseIssues)) { return null; }
  let isSuspended = props.licenseIssues.isSuspended;
  let date        = printDate(props.licenseIssues);

  if(licenseIssuesIsSuspended(props)) {

    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'summaryPage.myHistory.drivingRecord'
          text  = { props.licenseIssues.reason }
        />
        <SummaryItem
          title = 'summaryPage.myHistory.recordDate'
          text  = { date }
        />
      </PageSummaryLink>
    )
  } else {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'summaryPage.myHistory.drivingRecord'
          text  = 'shared.summary.none'
        />
      </PageSummaryLink>
    )
  }
};

export default LicenseIssues;
