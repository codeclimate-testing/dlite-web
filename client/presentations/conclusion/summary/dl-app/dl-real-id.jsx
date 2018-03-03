'use strict';

import React            from "react";
import RealID           from '../real-id.jsx';
import {
  DLAppExists
} from '../../../../helpers/data/card-type';


const DLRealID = (props) => {
  if(!DLAppExists(props)) { return null; }
  return (
    <RealID
      {...props}
      name='realID'
    />
  );
};

export default DLRealID;
