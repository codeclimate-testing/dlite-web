'use strict';

import React                from 'react';
import SummaryItem          from './summary-item.jsx';
import { printDate }        from '../../../helpers/print-date';
import * as dataPresent     from '../../../helpers/data-present';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import { cardNumberOrNone } from '../../../helpers/data/my-history';

export const CardNumber = (props) => {

  return (
    <SummaryItem
      title = {props.title}
      text  = {props.cardNumber}
    />
  )
};

export const CardDate = (props) => {
  if (!props.showIf) { return null; }
  let date    = printDate(props.cardInfo);
  return (
    <SummaryItem
      title = 'summaryPage.shared.expirationDate'
      text  = { date }
    />
  )
};

export const CurrentCardInfo = (props) => {
  if (!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }
  return (
    <PageSummaryLink
      {...props}
    >
      <CardNumber
        cardNumber  = { cardNumberOrNone(props.currentCardInfo)}
        title       = { props.title }
      />

      <CardDate
        cardInfo    = { props.currentCardInfo}
        showIf      = { dataPresent.date(props.currentCardInfo)}
      />
    </PageSummaryLink>
  );
};