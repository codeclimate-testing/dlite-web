'use strict';

import React              from 'react';
import { existingDL }     from '../../../../helpers/data/card-type';
import {
  CurrentCardInfo
} from '../current-card-info.jsx';


const CurrentDLInfo = (props) => {
  if(!existingDL(props)) { return null; }

  return (
    <CurrentCardInfo
      {...props}
      editKey         = 'addCurrentCardInfo'
      currentCardInfo = { props.DLApp.currentCard }
      title           = 'Driver license number'
    />
  )
};

export default CurrentDLInfo;