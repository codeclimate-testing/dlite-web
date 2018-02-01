'use strict';

import React from "react";
import * as dataPresent from '../../../helpers/data-present';
import SummaryItem      from './summary-item.jsx';

const ReducedOrNoFee = (props) => {
  if (!dataPresent.value(props.reducedFee.ID) || props.seniorID === 'Yes') { return null; }
  let value = 'Yes';

  props.reducedFee.ID === 'Yes' ? value : value = 'No';

  return (
    <div>
      <SummaryItem
        title='Reduced or no-fee'
        text={value}
      />
      <br></br>
    </div>
  );
};

export default ReducedOrNoFee;
