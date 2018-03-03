'use strict';

import React            from "react";
import RealID           from '../real-id.jsx';
import {
  IDAppExists
} from '../../../../helpers/data/card-type';


const IDRealID = (props) => {
  if(!IDAppExists(props)) { return null; }

  return (
    <RealID
      {...props}
      name = 'realID'
    />
  )
};

export default IDRealID;
