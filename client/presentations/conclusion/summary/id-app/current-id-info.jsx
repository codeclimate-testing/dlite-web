'use strict';

import React                from 'react';
import { existingID }       from '../../../../helpers/data/card-type';
import { CurrentCardInfo }  from '../current-card-info.jsx';

const CurrentIDInfo = (props) => {
  if(!existingID(props)) { return null; }
  return (
    <CurrentCardInfo
      {...props}
      currentCardInfo = { props.IDApp.currentCard }
      title           = 'summaryPage.myID.currentCard'
    />
  );
};

export default CurrentIDInfo;

