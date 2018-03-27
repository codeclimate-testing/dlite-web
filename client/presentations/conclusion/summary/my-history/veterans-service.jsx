'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import { isVeteran }    from '../../../../helpers/data/veteran';

const BenefitInfo = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title = 'summaryPage.myHistory.getBenefitsInformation'
      text  = { props.veteransService.receiveBenefits }
    />
  )
};

const PrintedOnCard = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title = 'summaryPage.myHistory.veteranPrintedOnCard'
      text  = { props.veteransService.veteransIdentifier }
    />
  )
};

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }
  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'summaryPage.myHistory.veteran'
        text  = { props.veteransService.isVeteran }
      />

      <BenefitInfo    veteransService={props.veteransService} />
      <PrintedOnCard  veteransService={props.veteransService} />

    </PageSummaryLink>
  )
};

export default VeteransService;
