'use strict';

import React            from 'react';
import { hasValue }     from '../../../helpers/data/validations';
import translations     from '../../../i18n';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import {
  getStringByPreviousNames
}   from '../../../helpers/data/my-history';

const NamesHistory = (props) => {
  if (!hasValue(props.namesHistory.hasUsedPreviousNames)) { return null; }
  let previousNames = getStringByPreviousNames(props);
  let locale = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title={translations[locale].summaryPage.myHistory.previousNames}
        text={previousNames}
      />
    </PageSummaryLink>
    );

};

export default NamesHistory;
