'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem        from '../../conclusion/summary/summary-item.jsx';
import {
  isVeteran,
  receiveBenefits,
  veteransIdentifier,
  militaryWaiver
}  from '../../../helpers/data/veteran';


const BenefitInfo = (props) => {
  if (!isVeteran(props)) { return null; }
  if(receiveBenefits(props)) {
    return (
      <SummaryItem
        title='summaryPage.myHistory.getBenefitsInformation'
        text='shared.commonAnswers.yes'
      />
    )
  } else {
    return (
      <SummaryItem
        title='summaryPage.myHistory.getBenefitsInformation'
        text='shared.commonAnswers.no'
      />
    )
  }
};

const PrintedOnCard = (props) => {
  if (!isVeteran(props)) { return null; }
  if(veteransIdentifier(props)) {
    return (
      <SummaryItem
        title='newExtracted.conclusion.summary.veteranOnCDL'
        text='shared.commonAnswers.yes'
      />
    )
  } else {
    return (
      <SummaryItem
        title='newExtracted.conclusion.summary.veteranOnCDL'
        text='shared.commonAnswers.no'
      />
    )
  }
};

const MilitaryWaiver = (props) => {
  if (!isVeteran(props)) { return null; }
  if(militaryWaiver(props)) {
    return (
      <SummaryItem
        title='newExtracted.conclusion.summary.cdlMilitaryDrivingWaiver'
        text='shared.commonAnswers.yes'
      />
    )
  } else {
    return (
      <SummaryItem
        title='newExtracted.conclusion.summary.cdlMilitaryDrivingWaiver'
        text='shared.commonAnswers.no'
      />
    )
  }
};

const Veteran = (props) => {
  if(isVeteran(props)) {
    return (
      <SummaryItem
        title='summaryPage.myHistory.veteran'
        text='shared.commonAnswers.yes'
      />
    )
  } else if(!isVeteran(props)) {
    return (
      <SummaryItem
        title='summaryPage.myHistory.veteran'
        text='shared.commonAnswers.no'
      />
    )
  }
}

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      summary = 'cdlSummary'
      editKey='cdlVeterans'
    >
      <Veteran {...props} />
      <BenefitInfo    {...props} />
      <MilitaryWaiver {...props} />
      <PrintedOnCard  {...props} />

    </PageSummaryLink>
  )
};

export default VeteransService;
