'use strict';

import React          from "react";
import { hasValue }   from '../../../helpers/data/validations';
import SummaryItem    from './summary-item.jsx';

const SeniorID = (props) => {
  if (!hasValue(props.seniorID)) { return null; }

  return (
    <SummaryItem
      title='Senior ID'
      text={props.seniorID}
    />
  )
};

export default SeniorID;
