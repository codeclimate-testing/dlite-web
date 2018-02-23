'use strict';

import React              from 'react';
import * as dataPresent   from '../../../../helpers/data-present';
import translations       from '../../../../i18n';
import { printDate }      from '../../../../helpers/print-date';
import PageSummaryLink    from '../../../page-summary-link.jsx';
import SummaryItem        from '../summary-item.jsx';
import { existingDL }     from '../../../../helpers/data/card-type';
import { hasValue }       from '../../../../helpers/data/validations';

const DLNumber = (props) => {
  if (!hasValue(props.number)) { return null; }
  return (
    <SummaryItem
      title='Driver license number'
      text={props.number}
    />
  )
};

const DLDate = (props) => {
  if (!dataPresent.date(props.currentCardInfo)) { return null; }
  let date = printDate(props.currentCardInfo);
  return (
    <SummaryItem
      title='Expiration date'
      text={date}
    />
  )
};

const CurrentDLInfo = (props) => {
  if(!existingDL(props)) { return null; }
  if(!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }

  return (
    <PageSummaryLink
      name = 'addCurrentCardInfo'
    >
      <DLNumber
        number = {props.currentCardInfo.number}
      />

      <DLDate
        currentCardInfo = {props.currentCardInfo}
      />

    </PageSummaryLink>
  )
};

export default CurrentDLInfo;

