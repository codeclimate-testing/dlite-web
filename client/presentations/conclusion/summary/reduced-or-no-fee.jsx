'use strict';

import React from "react";
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import translations     from '../../../i18n';
import {
  reducedFeeHasSelection,
  choosingReducedFee
} from '../../../helpers/data/reduced-fee';


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
      to='/reduced-fee'
      name='reducedFeeID'
    >
      <Yes reducedFee = {props.reducedFee} />
      <No reducedFee = {props.reducedFee} />

    </PageSummaryLink>
  );
};

export default ReducedOrNoFee;
