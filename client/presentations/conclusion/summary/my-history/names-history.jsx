'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getStringByPreviousNames
} from '../../../../helpers/data/my-history';

const NamesHistory = (props) => {
  if (!(dataPresent.hasPreviousNames(props.namesHistory))) { return null; }
  let text = getStringByPreviousNames(props);

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'summaryPage.myHistory.previousNames'
        text  = { text }
      />
    </PageSummaryLink>
  );
};

export default NamesHistory;
