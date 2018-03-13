'use strict';

import React            from 'react';
import { hasValue }     from '../../../helpers/data/validations';
import translations     from '../../../i18n';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import { getTenYearHistorySelection } from '../../../helpers/data/my-history';

const OtherStateLicenses = (props) => {
  if (!hasValue(props.otherStateLicenses.hasNonCALicense)) { return null; }
  let tenYearHistory = getTenYearHistorySelection(props);
  let locale = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title='Driver License Outside California'
        text={props.otherStateLicenses.hasNonCALicense}
      />
      <br></br>
      <SummaryItem
        title='Complete Ten Year History'
        text={tenYearHistory}
      />
    </PageSummaryLink>
    );

};

export default OtherStateLicenses;
