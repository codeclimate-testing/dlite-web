'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  CardNumber,
  CardDate
} from '../../../conclusion/summary/current-card-info.jsx';
import {
  showIssuedIn,
  showExpirationDate,
  cardNumber,
  licenseAndIdIssued
} from '../../../../helpers/data/my-history';

const IssuedIn = (props) => {
  let issuedBy   = props.licenseAndIdHistory.issuedBy;
  if (!showIssuedIn(props)) { return null; }

  return (
    <SummaryItem
      title = 'summaryPage.myHistory.issuedIn'
      text  = { issuedBy }
    />
  )
};

const LicenseHistory = (props) => {
  let DLIDNumber  = cardNumber(props);
  if(licenseAndIdIssued(props)) {
    return (
      <CardNumber
        title       = { props.title }
        cardNumber  = { DLIDNumber }
      />
    )
  } else {
    return (
      <CardNumber
        title       = { props.title }
        cardNumber  = 'shared.summary.none'
      />
    )
  }
}

const LicenseAndIdHistory = (props) => {
  if (!hasValue(props.licenseAndIdHistory.isIssued)) { return null; }

  return (
    <PageSummaryLink
      {...props}
    >
      <LicenseHistory {...props} />
      <IssuedIn
        licenseAndIdHistory = {props.licenseAndIdHistory}
      />

      <CardDate
        cardInfo  = { props.licenseAndIdHistory}
        showIf    = { showExpirationDate(props)}
      />

    </PageSummaryLink>
  )
};

export default LicenseAndIdHistory;
