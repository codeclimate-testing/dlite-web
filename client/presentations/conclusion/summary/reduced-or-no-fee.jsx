'use strict';

import React from "react";
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const ReducedOrNoFee = (props) => {
  if (!dataPresent.value(props.reducedFee.ID) || props.seniorID === 'Yes') { return null; }
  let value = 'Yes';

  props.reducedFee.ID === 'Yes' ? value : value = 'No';

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
