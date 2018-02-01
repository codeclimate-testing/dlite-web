'use strict';

import React         from "react";
import { hasValue }  from '../../../helpers/data/validations';
import SummaryItem   from './summary-item.jsx';
import {
  getDL
} from '../../../helpers/data/card-type';

const DLRealID = (props) => {
  if(!getDL(props)) { return null; }
  let value = 'Yes';
  props.realID.getRealID === 'Yes' ? value : value = 'No'

  return (
    <SummaryItem
      title='Real ID'
      text={value}
    />
  )
};

export default DLRealID;
