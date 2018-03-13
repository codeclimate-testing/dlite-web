'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';
import {
  CardNumber,
  CardDate
} from '../../../conclusion/summary/current-card-info.jsx';
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
      title={translations[props.locale].summaryPage.myHistory.issuedIn + ':'}
      text={issuedBy}
    />
  )
};


const LicenseAndIdHistory = (props) => {
  if (!hasValue(props.licenseAndIdHistory.isIssued)) { return null; }

  let DLIDNumber  = cardNumber(props);
  let locale      = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
      <CardNumber
        title       = { props.title}
        cardNumber  = { DLIDNumber}
        locale      = { locale }
      />
      <IssuedIn
        licenseAndIdHistory = {props.licenseAndIdHistory}
        locale      = { locale }
      />

      <CardDate
        cardInfo  = { props.licenseAndIdHistory}
        showIf    = { showExpirationDate(props)}
        locale    = { locale }
      />

    </PageSummaryLink>
  )
};

export default LicenseAndIdHistory;