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
      title='Get benefit information:'
      text={props.veteransService.receiveBenefits}
    />
  )
};

const PrintedOnCard = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title='"Veteran" printed on CDL:'
      text={props.veteransService.veteransIdentifier}
    />
  )
};

const MilitaryWaiver = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
      title='Military driving experience CDL waiver:'
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
        title='Veteran:'
        text={props.veteransService.isVeteran}
      />

      <BenefitInfo    veteransService={props.veteransService} />
      <MilitaryWaiver veteransService={props.veteransService} />
      <PrintedOnCard  veteransService={props.veteransService} />

    </PageSummaryLink>
  )
};

export default VeteransService;
