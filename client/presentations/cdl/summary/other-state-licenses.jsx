'use strict';

import React                          from 'react';
import { hasValue }                   from '../../../helpers/data/validations';
import PageSummaryLink                from '../../../containers/page-summary-link.jsx';
import SummaryItem                    from '../../conclusion/summary/summary-item.jsx';
import { getTenYearHistorySelection } from '../../../helpers/data/my-history';

const OtherStateLicenses = (props) => {
  if (!hasValue(props.otherStateLicenses.hasNonCALicense)) { return null; }
  let tenYearHistoryKey = getTenYearHistorySelection(props);

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'SummaryPage.licenseOutsideCAlabel'
        text  = { props.otherStateLicenses.hasNonCALicense }
      />
      <br></br>
      <SummaryItem
        title = 'newExtracted.conclusion.summary.tenYearHistory'
        text  = { tenYearHistoryKey }
      />
    </PageSummaryLink>
    );

};

export default OtherStateLicenses;
