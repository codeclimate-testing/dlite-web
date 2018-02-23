'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  licenseAndIdIssued,
  dateOfIssue
} from '../../../../helpers/data/my-history';

const IsIssued = (props) => {
  if (!licenseAndIdIssued(props)) { return null; }
  let date       = printDate(props.licenseAndIdHistory);
  let issuedBy   = props.licenseAndIdHistory.issuedBy;

  return (
    <div>
      <SummaryItem
        title='Issued in:'
        text={issuedBy}
      />
      <SummaryItem
        title='Expiration date:'
        text={date}
      />
    </div>
  );
};

const LicenseAndIdHistory = (props) => {
  if (!dataPresent.licenseAndIdHistory(props.licenseAndIdHistory)) { return null; }

  let DLIDNumber = dateOfIssue(props);

  return (
    <PageSummaryLink
      to    = '/my-history/license-and-id'
      name  = 'addLicenseHistory'
    >
      <SummaryItem
        title = 'Previous DL/ID card number:'
        text  = {DLIDNumber}
      />
      <IsIssued
        licenseAndIdHistory = {props.licenseAndIdHistory}
      />
    </PageSummaryLink>
  )
};

export default LicenseAndIdHistory;
