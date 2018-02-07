'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const TraitsHeightWeight = (props) => {
  if (!dataPresent.traitsHeightWeight(props.traitsHeightWeight)) { return null; }

  let heightInches = props.traitsHeightWeight.heightInches || 0;
  let height = props.traitsHeightWeight.heightFeet + ' feet ' + heightInches + ' inches';
  let weight = props.traitsHeightWeight.weight + ' pounds';

  return (
    <PageSummaryLink
      to='/my-basics/traits-height-weight'
      name='traitsHeightWeight'
    >
      <SummaryItem
        title='Height'
        text={height}
      />
      <SummaryItem
        title='Weight'
        text={weight}
      />
    </PageSummaryLink>
  );
};

export default TraitsHeightWeight;
