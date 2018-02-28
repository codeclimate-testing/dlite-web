'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../Page-summary-link.jsx';
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
  if (!hasValue(props.licenseAndIdHistory.isIssued)) { return null; }

  let DLIDNumber = dateOfIssue(props);

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = {props.editKey}
    >
      <SummaryItem
        title = {props.title}
        text  = {DLIDNumber}
      />
      <IsIssued
        licenseAndIdHistory = {props.licenseAndIdHistory}
      />
    </PageSummaryLink>
  )
};

export default LicenseAndIdHistory;
