'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../Summary-item.jsx';
import translations     from '../../../../i18n';
import {
  reducedFeeHasSelection,
  choosingReducedFee
} from '../../../../helpers/data/reduced-fee';


const Yes = (props) => {
  if (!choosingReducedFee(props)) { return null; }
  return (
    <SummaryItem
      title='Reduced or no-fee'
      text={translations.shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (choosingReducedFee(props)) { return null; }
  return (
    <SummaryItem
      title='Reduced or no-fee'
      text={translations.shared.commonAnswers.no}
    />
  )
};

const ReducedOrNoFee = (props) => {
  if (!reducedFeeHasSelection(props)) { return null; }

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = 'reducedFeeID'
    >
      <Yes reducedFee = {props.reducedFee} />
      <No reducedFee = {props.reducedFee} />

    </PageSummaryLink>
  );
};

export default ReducedOrNoFee;
