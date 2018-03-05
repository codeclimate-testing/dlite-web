'use strict';

import React            from "react";
import RealID           from '../real-id.jsx';
import {
  IDAppExists
} from '../../../../helpers/data/card-type';


const IDRealID = (props) => {

  return (
    <RealID
      {...props}
      showIf = {IDAppExists(props)}
      name  = 'realID'
      title = 'Real-ID Compliant'
    />
  )
};

export default IDRealID;
