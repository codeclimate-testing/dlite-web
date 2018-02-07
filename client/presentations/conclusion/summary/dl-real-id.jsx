'use strict';

import React            from "react";
import { hasValue }     from '../../../helpers/data/validations';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getDL
} from '../../../helpers/data/card-type';
import { getStringByStatus }  from '../../../helpers/data/summary';

const DLRealID = (props) => {
  if(!getDL(props)) { return null; }

  let yesString = 'Yes';
  let noString = 'No';
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

export default DLRealID;
