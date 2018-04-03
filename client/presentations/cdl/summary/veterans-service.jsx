'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem        from '../../conclusion/summary/summary-item.jsx';
import { isVeteran }      from '../../../helpers/data/veteran';


const BenefitInfo = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title='summaryPage.myHistory.getBenefitsInformation'
      text={props.veteransService.receiveBenefits}
    />
  )
};

const PrintedOnCard = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title='newExtracted.conclusion.summary.veteranOnCDL'
      text={props.veteransService.veteransIdentifier}
    />
  )
};

const MilitaryWaiver = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title='newExtracted.conclusion.summary.cdlMilitaryDrivingWaiver'
      text={props.veteransService.militaryWaiver}
    />
  )
};

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      summary = 'cdlSummary'
      editKey='cdlVeterans'
    >
      <SummaryItem
        title='summaryPage.myHistory.veteran'
        text={props.veteransService.isVeteran}
      />

      <BenefitInfo    veteransService={props.veteransService} />
      <MilitaryWaiver veteransService={props.veteransService} />
      <PrintedOnCard  veteransService={props.veteransService} />

    </PageSummaryLink>
  )
};

export default VeteransService;
