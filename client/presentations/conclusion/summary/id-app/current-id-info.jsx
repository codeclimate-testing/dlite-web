'use strict';

import React              from 'react';
import * as dataPresent   from '../../../../helpers/data-present';
import translations       from '../../../../i18n';
import PageSummaryLink    from '../Page-summary-link.jsx';
import {
  existingID
} from '../../../../helpers/data/card-type';
import {
  CardNumber,
  CardDate
} from '../current-card-info.jsx';


const CurrentIDInfo = (props) => {

  if(!existingID(props)) { return null; }
  if(!dataPresent.currentCardInfo(props.IDApp.currentCard)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      name='addCurrentIDInfo'
    >
      <CardNumber
        number  = {props.IDApp.currentCard.number}
        title   = 'ID card number'
      />

      <CardDate
        currentCardInfo = {props.IDApp.currentCard}
      />
    </PageSummaryLink>
  )
};

export default CurrentIDInfo;

