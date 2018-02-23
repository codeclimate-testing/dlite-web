'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../Summary-item.jsx';

const PhysicalTraits = (props) => {
  if (!dataPresent.physicalTraits(props.physicalTraits)) { return null; }

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = 'sexEyeHair'
    >
      <SummaryItem
        title='Sex'
        text={props.physicalTraits.sex}
      />

      <SummaryItem
        title='Eye Color'
        text={props.physicalTraits.eyeColor}
      />

      <SummaryItem
        title='Hair Color'
        text={props.physicalTraits.hairColor}
      />
    </PageSummaryLink>
    )
};

export default PhysicalTraits;
