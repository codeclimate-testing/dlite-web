'use strict';

import React              from 'react';
import * as dataPresent   from '../../../../helpers/data-present';
import translations       from '../../../../i18n';
import { printDate }      from '../../../../helpers/print-date';
import PageSummaryLink    from '../Page-summary-link.jsx';
import SummaryItem        from '../summary-item.jsx';
import { hasValue }       from '../../../../helpers/data/validations';
import {
  existingID
} from '../../../../helpers/data/card-type';

const IDNumber = (props) => {
  if (!hasValue(props.number)) { return null; }
  return (
    <SummaryItem
      title='ID card number'
      text={props.number}
    />
  )
};

const IDDate = (props) => {
  if (!dataPresent.date(props.currentCardInfo)) { return null; }
  let date = printDate(props.currentCardInfo);
  return (
    <SummaryItem
      title='Expiration date'
      text={date}
    />
  )
};

const CurrentIDInfo = (props) => {
  let application = props.application;
  if(!existingID(application)) { return null; }
  if(!dataPresent.currentCardInfo(application.IDApp.currentCardInfo)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      name='addCurrentIDInfo'
    >
      <IDNumber
        number = {application.IDApp.currentCardInfo.number}
      />

      <IDDate
        currentCardInfo = {application.IDApp.currentCardInfo}
      />
    </PageSummaryLink>
  )
};

export default CurrentIDInfo;

