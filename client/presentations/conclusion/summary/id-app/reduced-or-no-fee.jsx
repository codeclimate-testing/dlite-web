'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';
import {
  reducedFeeHasSelection,
  choosingReducedFee
} from '../../../../helpers/data/reduced-fee';


const Yes = (props) => {
  if (!choosingReducedFee(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title = { translations[locale].summaryPage.myID.reducedFeeHeading }
      text  = { translations[locale].shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (choosingReducedFee(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title = { translations[locale].summaryPage.myID.reducedFeeHeading }
      text  = { translations[locale].shared.commonAnswers.no}
    />
  )
};

const ReducedOrNoFee = (props) => {
  if (!reducedFeeHasSelection(props)) { return null; }
  let locale = props.locale;
  return (
    <PageSummaryLink
      {...props}
      name  = { props.editKey}
    >
      <Yes  reducedFee = {props.reducedFee} locale = {locale}/>
      <No   reducedFee = {props.reducedFee} locale = {locale}/>

    </PageSummaryLink>
  );
};

export default ReducedOrNoFee;
