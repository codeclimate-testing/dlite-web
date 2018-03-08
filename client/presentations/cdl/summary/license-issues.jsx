'use strict';

import React            from 'react';
import { printDate }    from '../../../helpers/print-date';
import { hasValue }     from '../../../helpers/data/validations';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../conclusion/summary/Page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import {
  licenseIssuesIsSuspended
} from '../../../helpers/data/my-history';

const LicenseIssues = (props) => {
  if(!hasValue(props.licenseIssues.isSuspended)) { return null; }
  let isSuspended = props.licenseIssues.isSuspended;
  let date        = printDate(props.licenseIssues);
  let reason      = 'None';

  if(licenseIssuesIsSuspended(props)) {
    reason = props.licenseIssues.reason;
    return (
      <PageSummaryLink
        name='cdlLicenseIssues'
      >
        <SummaryItem
          title='Driving record:'
          text={reason}
        />
        <SummaryItem
          title='Record date:'
          text={date}
        />
      </PageSummaryLink>
    )
  } else {
    return (
      <PageSummaryLink
        name= 'cdlLicenseIssues'
        summary = {props.summary}
      >
        <SummaryItem
          title='Driving record:'
          text={reason}
        />
      </PageSummaryLink>
    )
  }
};

export default LicenseIssues;
