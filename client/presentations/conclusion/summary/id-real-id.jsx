'use strict';

import React            from "react";
import { hasValue }     from '../../../helpers/data/validations';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getID
} from '../../../helpers/data/card-type';

const IDRealID = (props) => {
  if(!getID(props)) { return null; }
  let value = 'Yes';
  props.realID.getRealID === 'Yes' ? value : value = 'No'

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
