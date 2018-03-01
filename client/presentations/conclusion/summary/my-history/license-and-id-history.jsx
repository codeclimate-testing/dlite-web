'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  showIssuedIn,
  showExpirationDate,
  cardNumber
} from '../../../../helpers/data/my-history';

const IssuedIn = (props) => {
  let issuedBy   = props.licenseAndIdHistory.issuedBy;
  if (!showIssuedIn(props)) { return null; }

  return (
    <SummaryItem
      title='Issued in:'
      text={issuedBy}
    />
  )
};

const ExpirationDate = (props) => {
  if (!showExpirationDate(props)) { return null; }
  let date       = printDate(props.licenseAndIdHistory);
  return (
  <SummaryItem
      title='Expiration date:'
      text={date}
    />
  )
};


const LicenseAndIdHistory = (props) => {
  if (!hasValue(props.licenseAndIdHistory.isIssued)) { return null; }

  let DLIDNumber = cardNumber(props);

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = {props.editKey}
    >
      <SummaryItem
        title = {props.title}
        text  = {DLIDNumber}
      />
      <IssuedIn       licenseAndIdHistory = {props.licenseAndIdHistory}/>

      <ExpirationDate licenseAndIdHistory = {props.licenseAndIdHistory}/>

    </PageSummaryLink>
  )
};

export default LicenseAndIdHistory;