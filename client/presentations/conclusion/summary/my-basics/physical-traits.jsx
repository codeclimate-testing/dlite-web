'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

const PhysicalTraits = (props) => {
  if (!dataPresent.physicalTraits(props.physicalTraits)) { return null; }
  let locale = props.locale;
  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = { translations[locale].shared.labels.sex}
        text  = { props.physicalTraits.sex}
      />

      <SummaryItem
        title = { translations[locale].summaryPage.myBasics.eyeColor}
        text  = { props.physicalTraits.eyeColor}
      />

      <SummaryItem
        title = { translations[locale].summaryPage.myBasics.hairColor }
        text  = { props.physicalTraits.hairColor}
      />
    </PageSummaryLink>
    )
};

export default PhysicalTraits;
