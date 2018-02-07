'use strict';

import React            from "react";
import { hasValue }     from '../../../helpers/data/validations';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getID
} from '../../../helpers/data/card-type';
import {
  getStringByStatus
} from '../../../helpers/data/summary';

const IDRealID = (props) => {
  if(!getID(props)) { return null; }
  const yesString = 'Yes';
  const noString = 'No';
  let value = getStringByStatus(props.realID.getRealID, yesString, noString);

  return (
    <PageSummaryLink
      to='/real-id'
      name='realID'
    >
      <SummaryItem
        title='Real-ID Compliant'
        text={value}
      />
    </PageSummaryLink>
  )
};

export default IDRealID;
