'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const TraitsHeightWeight = (props) => {
  if (!dataPresent.traitsHeightWeight(props.traitsHeightWeight)) { return null; }

  let heightInches = props.traitsHeightWeight.heightInches || 0;
  let height = props.traitsHeightWeight.heightFeet + ' feet ' + heightInches + ' inches';
  let weight = props.traitsHeightWeight.weight + ' pounds';

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'summaryPage.myBasics.height'
        text  = { height  }
      />
      <SummaryItem
        title = 'summaryPage.myBasics.weight'
        text  = { weight }
      />
    </PageSummaryLink>
  );
};

export default TraitsHeightWeight;
