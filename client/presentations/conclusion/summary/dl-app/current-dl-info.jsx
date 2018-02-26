'use strict';

import React              from 'react';
import * as dataPresent   from '../../../../helpers/data-present';
import translations       from '../../../../i18n';
import PageSummaryLink    from '../Page-summary-link.jsx';
import { existingDL }     from '../../../../helpers/data/card-type';
import {
  CardNumber,
  CardDate
} from '../current-card-info.jsx';


const CurrentDLInfo = (props) => {
  if(!existingDL(props)) { return null; }
  if(!dataPresent.currentCardInfo(props.DLApp.currentCard)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      name    = 'addCurrentCardInfo'
      summary = {props.summary}
    >
      <CardNumber
        number  = {props.DLApp.currentCard.number}
        title   = 'Driver license number'
      />

      <CardDate
        currentCardInfo = {props.DLApp.currentCard}
      />

    </PageSummaryLink>
  )
};

export default CurrentDLInfo;

