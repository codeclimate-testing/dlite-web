'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import translations       from '../../../i18n';
import { printDate }      from '../../../helpers/print-date';
import SummaryItem        from './summary-item.jsx';
import {
  getID
} from '../../../helpers/data/card-type';

const CurrentIDInfo = (props) => {
  if(!getID(props)) { return null; }
  if(props.cardType.cardAction === 'new') { return null; }
  if(!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }
  let IDNumber = props.currentCardInfo.number
  let date = printDate(props.currentCardInfo);

  return (
    <div>
      <SummaryItem
        title='ID card number'
        text={IDNumber}
      />
      <br></br>
      <SummaryItem
        title='Expiration date'
        text={date}
      />
    </div>
  )
};

export default CurrentIDInfo;

