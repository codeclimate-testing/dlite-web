'use strict';

import React            from "react";
import * as dataPresent from '../../../helpers/data-present';
import { printDate }    from '../../../helpers/print-date';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const PhysicalTraits = (props) => {
  if (!dataPresent.physicalTraits(props.physicalTraits)) { return null; }

  return (
    <PageSummaryLink
      to='/my-basics/physical-traits'
      name='physicalTraits'
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
