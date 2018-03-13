'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

const TraitsHeightWeight = (props) => {
  if (!dataPresent.traitsHeightWeight(props.traitsHeightWeight)) { return null; }

  let heightInches = props.traitsHeightWeight.heightInches || 0;
  let height = props.traitsHeightWeight.heightFeet + ' feet ' + heightInches + ' inches';
  let weight = props.traitsHeightWeight.weight + ' pounds';
  let locale = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title={ translations[locale].summaryPage.myBasics.height}
        text={height}
      />
      <SummaryItem
        title={ translations[locale].summaryPage.myBasics.weight}
        text={weight}
      />
    </PageSummaryLink>
  );
};

export default TraitsHeightWeight;
