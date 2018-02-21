'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getStringByPreviousNames
} from '../../../helpers/data/my-history';

const NamesHistory = (props) => {
  if (!(dataPresent.hasPreviousNames(props.namesHistory))) { return null; }
  let text = getStringByPreviousNames(props);

  return (
    <PageSummaryLink
      name='nameHistory'
    >
      <SummaryItem
        title='Previous Names'
        text={text}
      />
    </PageSummaryLink>
  );
};

export default NamesHistory;
