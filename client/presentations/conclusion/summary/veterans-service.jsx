'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }
  let veteran = 'No';
  let benefitsInfo = 'No';
  let printVeteran = 'No';

  if(props.veteransService.isVeteran === 'Yes') { veteran = 'Yes'};
  if(props.veteransService.receiveBenefits === 'Yes') { benefitsInfo = 'Yes'};
  if(props.veteransService.veteransIdentifier === 'Yes') { printVeteran = 'Yes'};

  return (
    <PageSummaryLink
      to='/my-history/veterans-service'
      name='veteransService'
    >
      <SummaryItem
        title='Veteran:'
        text={veteran}
      />
      <br></br>
      <SummaryItem
        title='Get benefit information:'
        text={benefitsInfo}
      />
      <br></br>
      <SummaryItem
        title='"Veteran" printed on card(s):'
        text={printVeteran}
      />
    </PageSummaryLink>
  )
};

export default VeteransService;
