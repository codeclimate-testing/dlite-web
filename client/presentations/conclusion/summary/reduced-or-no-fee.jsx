'use strict';

import React from "react";
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  reducedOrNoFee
} from '../../../helpers/data/reduced-fee';
import {
  getStringByStatus
} from '../../../helpers/data/summary';

const ReducedOrNoFee = (props) => {
  if (!reducedOrNoFee(props)) { return null; }

  const yesString = 'Yes';
  const noString = 'No';

  let value = getStringByStatus(props.reducedFee.ID, yesString, noString);

  return (
    <PageSummaryLink
      to='/reduced-fee'
      name='address'
    >
      <SummaryItem
        title='Reduced or no-fee'
        text={value}
      />
    </PageSummaryLink>
  );
};

export default ReducedOrNoFee;
