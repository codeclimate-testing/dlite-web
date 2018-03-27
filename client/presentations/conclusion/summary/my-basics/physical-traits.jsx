'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const PhysicalTraits = (props) => {
  if (!dataPresent.physicalTraits(props.physicalTraits)) { return null; }
  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'shared.labels.sex'
        text  = { props.physicalTraits.sex }
      />

      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = { props.physicalTraits.eyeColor }
      />

      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = { props.physicalTraits.hairColor }
      />
    </PageSummaryLink>
    )
};

export default PhysicalTraits;
