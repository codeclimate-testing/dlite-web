'use strict';

import React            from 'react';
import { printDate }    from '../../../../helpers/print-date';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';
import {
  licenseIssuesIsSuspended
} from '../../../../helpers/data/my-history';

const LicenseIssues = (props) => {
  if (!dataPresent.licenseIssues(props.licenseIssues)) { return null; }
  let isSuspended = props.licenseIssues.isSuspended;
  let date        = printDate(props.licenseIssues);
  let locale      = props.locale;

  if(licenseIssuesIsSuspended(props)) {

    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title={ translations[locale].summaryPage.myHistory.drivingRecord }
          text= { props.licenseIssues.reason}
        />
        <SummaryItem
          title= { translations[locale].summaryPage.myHistory.recordDate }
          text={date}
        />
      </PageSummaryLink>
    )
  } else {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = { translations[locale].summaryPage.myHistory.drivingRecord }
          text  = { translations[locale].shared.summary.none }
        />
      </PageSummaryLink>
    )
  }
};

export default LicenseIssues;
