'use strict';

import React            from "react";
import * as dataPresent from '../../../helpers/data-present';
import { printDate }    from '../../../helpers/print-date';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  licenseAndIdIssued
} from '../../../helpers/data/my-history'

const LicenseAndIdHistory = (props) => {
  if (!dataPresent.licenseAndIdHistory(props.licenseAndIdHistory)) { return null; }
  let date       = printDate(props.licenseAndIdHistory);
  let issuedBy   = props.licenseAndIdHistory.issuedBy;
  let DLIDNumber = 'None';

  if(licenseAndIdIssued(props)) {
    DLIDNumber = props.licenseAndIdHistory.DLIDNumber;
    return (
      <PageSummaryLink
        to='/my-history/license-and-id'
        name='licenseAndIdHistory'
      >
        <SummaryItem
          title='Previous DL/ID card number:'
          text={DLIDNumber}
        />
        <SummaryItem
          title='Issued in:'
          text={issuedBy}
        />
        <SummaryItem
          title='Expiration date:'
          text={date}
        />
      </PageSummaryLink>
    )
  } else {
    return (
      <PageSummaryLink
        to='/my-history/license-and-id'
        name='licenseAndId'
      >
        <SummaryItem
          title='Previous DL/ID card number:'
          text={DLIDNumber}
        />
      </PageSummaryLink>
    )
  };
};

export default LicenseAndIdHistory;
