'use strict';

import React              from 'react';
import SummaryItem        from './summary-item.jsx';
import { printDate }      from '../../../helpers/print-date';
import * as dataPresent   from '../../../helpers/data-present';
import { hasValue }       from '../../../helpers/data/validations';


export const CardNumber = (props) => {
  if (!hasValue(props.number)) { return null; }
  return (
    <SummaryItem
      title = {props.title}
      text  = {props.number}
    />
  )
};

export const CardDate = (props) => {
  if (!dataPresent.date(props.currentCardInfo)) { return null;}
  let date = printDate(props.currentCardInfo);
  return (
    <SummaryItem
      title = 'Expiration date'
      text  = {date}
    />
  )
};