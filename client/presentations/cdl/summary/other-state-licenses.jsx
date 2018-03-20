'use strict';

import React            from 'react';
import { hasValue }     from '../../../helpers/data/validations';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import { getTenYearHistorySelection } from '../../../helpers/data/my-history';
import translations         from '../../../i18n';
import Translation          from '../../../i18n/translate-tag.jsx';

const OtherStateLicenses = (props) => {
  let locale = props.locale;
  if (!hasValue(props.otherStateLicenses.hasNonCALicense)) { return null; }
  let tenYearHistory = getTenYearHistorySelection(props);

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = {translations[locale].SummaryPage.licenseOutsideCAlabel}
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
