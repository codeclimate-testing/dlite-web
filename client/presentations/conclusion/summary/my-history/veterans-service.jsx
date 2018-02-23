'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getStringByStatus
} from '../../../../helpers/data/summary';

const yesString = 'Yes';
const noString = 'No';

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }
  let veteran = getStringByStatus(props.veteransService.isVeteran, yesString, noString);
  let benefitsInfo = getStringByStatus(props.veteransService.receiveBenefits, yesString, noString);
  let printVeteran = getStringByStatus(props.veteransService.veteransIdentifier, yesString, noString);

  return (
    <PageSummaryLink
      summary = {props.summary}
      name='veterans'
    >
      <SummaryItem
        title='Veteran:'
        text={veteran}
      />
      <SummaryItem
        title='Get benefit information:'
        text={benefitsInfo}
      />
      <SummaryItem
        title='"Veteran" printed on card(s):'
        text={printVeteran}
      />
    </PageSummaryLink>
  )
};

export default VeteransService;
