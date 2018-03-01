'use strict';

import React              from 'react';
import SummaryItem        from './summary-item.jsx';
import { printDate }      from '../../../helpers/print-date';
import * as dataPresent   from '../../../helpers/data-present';
import PageSummaryLink    from './Page-summary-link.jsx';
import { cardNumberOrNone } from '../../../helpers/data/my-history';


export const CardNumber = (props) => {
  let cardNumber = cardNumberOrNone(props);
  return (
    <SummaryItem
      title = {props.title}
      text  = {cardNumber}
    />
  )
};

export const CardDate = (props) => {
  if (!dataPresent.date(props.currentCardInfo)) { return null;}
  let date = printDate(props.currentCardInfo);
  return (
    <SummaryItem
      title = 'Expiration date:'
      text  = {date}
    />
  )
};

export const CurrentCardInfo = (props) => {
  if (!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }
  return (
    <PageSummaryLink
      {...props}
      name      = {props.editKey}
    >
      <CardNumber
        number  = {props.currentCardInfo.number}
        title   = {props.title}
      />

      <CardDate
        currentCardInfo = {props.currentCardInfo}
      />
    </PageSummaryLink>
  );
};