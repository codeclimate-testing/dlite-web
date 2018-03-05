'use strict';

import React            from "react";
import RealID           from '../real-id.jsx';
import {
  DLAppExists
} from '../../../../helpers/data/card-type';


const DLRealID = (props) => {
  let showIf = DLAppExists(props);
  return (
    <RealID
      {...props}
      showIf  = { showIf }
      name    = 'realID'
      title   = 'Real-ID Compliant'
    />
  );
};

export default DLRealID;
