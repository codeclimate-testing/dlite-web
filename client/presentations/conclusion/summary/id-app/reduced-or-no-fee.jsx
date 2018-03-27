'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  reducedFeeHasSelection,
  choosingReducedFee
} from '../../../../helpers/data/reduced-fee';


const Yes = (props) => {
  if (!choosingReducedFee(props)) { return null; }
  return (
    <SummaryItem
      title = 'summaryPage.myID.reducedFeeHeading'
      text  = 'shared.commonAnswers.yes'
    />
  )
};

const No = (props) => {
  if (choosingReducedFee(props)) { return null; }
  return (
    <SummaryItem
      title = 'summaryPage.myID.reducedFeeHeading'
      text  = 'shared.commonAnswers.no'
    />
  )
};

const ReducedOrNoFee = (props) => {
  if (!reducedFeeHasSelection(props)) { return null; }
  return (
    <PageSummaryLink
      {...props}
      name  = { props.editKey}
    >
      <Yes  reducedFee = {props.reducedFee}/>
      <No   reducedFee = {props.reducedFee}/>

    </PageSummaryLink>
  );
};

export default ReducedOrNoFee;
