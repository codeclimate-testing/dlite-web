'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getStringByPreviousNames,
  hasUsedPreviousNames
} from '../../../../helpers/data/my-history';

const Names = (props) => {
  let text = getStringByPreviousNames(props);
  if(hasUsedPreviousNames(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.myHistory.previousNames'
        text  = { text }
      />
    )
  } else {
    return (
      <SummaryItem
        title = 'summaryPage.myHistory.previousNames'
        text  = 'shared.summary.none'
      />
    )
  }
}

const NamesHistory = (props) => {
  if (!(dataPresent.hasPreviousNames(props.namesHistory))) { return null; }

  return (
    <PageSummaryLink
      {...props}
    >
      <Names {...props} />
      </PageSummaryLink>
  );
};

export default NamesHistory;
