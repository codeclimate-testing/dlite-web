'use strict';

import React          from "react";
import { hasValue }   from '../../../helpers/data/validations';
import SummaryItem    from './summary-item.jsx';
import {
  getID
} from '../../../helpers/data/card-type';

const IDRealID = (props) => {
  if(!getID(props)) { return null; }
  let value = 'Yes';
  props.realID.getRealID === 'Yes' ? value : value = 'No'

  return (
    <div>
      <SummaryItem
        title='Real ID'
        text={value}
      />
      <br></br>
    </div>
  )
};

export default IDRealID;
