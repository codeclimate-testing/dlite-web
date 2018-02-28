'use strict';

import React              from 'react';
import { existingID }     from '../../../../helpers/data/card-type';
import { CurrentCardInfo }from '../current-card-info.jsx';


const CurrentIDInfo = (props) => {

  if(!existingID(props)) { return null; }
  if(!dataPresent.currentCardInfo(props.IDApp.currentCard)) { return null; }

  return (
    <CurrentCardInfo
      {...props}
      editKey     = 'addCurrentIDInfo'
      currentCard = { props.IDApp.currentCard }
      title       = 'ID card number'
    />
  );
};

export default CurrentIDInfo;

