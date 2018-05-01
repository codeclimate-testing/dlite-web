'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import { 
  isVeteran,
  receiveBenefits,
  veteransIdentifier
}    from '../../../../helpers/data/veteran';

const BenefitInfo = (props) => {
  if (!isVeteran(props)) { return null; }
  if(receiveBenefits(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myHistory.getBenefitsInformation'
        text      = 'shared.commonAnswers.yes'
      />
    )
  } else {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myHistory.getBenefitsInformation'
        text      = 'shared.commonAnswers.no'
      />
    )
  }
};

const PrintedOnCard = (props) => {
  if (!isVeteran(props)) { return null; }
  if(veteransIdentifier(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myHistory.veteranPrintedOnCard'
        text      = 'shared.commonAnswers.yes'
      />
    )
  } else {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myHistory.veteranPrintedOnCard'
        text      = 'shared.commonAnswers.no'
      />
    )
  }
};

const IsVeteran = (props) => {
  if(isVeteran(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.myHistory.veteran'
        text  = 'shared.commonAnswers.yes'
      />
    )
  } else if(!isVeteran(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.myHistory.veteran'
        text  = 'shared.commonAnswers.no'
      />
    )
  }
}

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }
  return (
    <PageSummaryLink
      {...props}
    >

    <IsVeteran {...props} />
    <BenefitInfo    {...props} />
    <PrintedOnCard  {...props} />

    </PageSummaryLink>
  )
};

export default VeteransService;
