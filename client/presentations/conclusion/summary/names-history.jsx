'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const NamesHistory = (props) => {
  if (!(dataPresent.hasPreviousNames(props.namesHistory))) { return null; }
  let text = 'None';
  if(props.namesHistory.hasUsedPreviousNames === 'Yes'){
    text = props.namesHistory.previousNames
  } else {
    text
  };

  return (
    <PageSummaryLink
      to='/my-history/names'
      name='namesHistory'
    >
      <SummaryItem
        title='Previous Names'
        text={text}
      />
    </PageSummaryLink>
  );
};

export default NamesHistory;
