'use strict';

import React            from "react";
import * as dataPresent from '../../../helpers/data-present';
import { printDate }    from '../../../helpers/print-date';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const LicenseAndIdHistory = (props) => {
  if (!dataPresent.licenseAndIdHistory(props.licenseAndIdHistory)) { return null; }
  let date       = printDate(props.licenseAndIdHistory);
  let issuedBy   = props.licenseAndIdHistory.issuedBy;
  let DLIDNumber = 'None';

  if(props.licenseAndIdHistory.isIssued === 'Yes' ) {
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
        <br></br>
        <SummaryItem
          title='Issued in:'
          text={issuedBy}
        />
        <br></br>
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
