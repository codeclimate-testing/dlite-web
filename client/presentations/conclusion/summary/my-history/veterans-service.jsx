'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import { isVeteran }    from '../../../../helpers/data/veteran';


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
      title='"Veteran" printed on card(s):'
      text={props.veteransService.veteransIdentifier}
    />
  )
};

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }

  return (
    <PageSummaryLink
      summary = {props.summary}
      name='veterans'
    >
      <SummaryItem
        title='Veteran:'
        text={props.veteransService.isVeteran}
      />

      <BenefitInfo    veteransService={props.veteransService} />
      <PrintedOnCard  veteransService={props.veteransService} />

    </PageSummaryLink>
  )
};

export default VeteransService;
