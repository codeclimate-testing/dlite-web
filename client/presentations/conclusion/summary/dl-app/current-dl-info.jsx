'use strict';

import React              from 'react';
import { existingDL }     from '../../../../helpers/data/card-type';
import translations       from '../../../../i18n';
import {
  CurrentCardInfo
} from '../current-card-info.jsx';


const CurrentDLInfo = (props) => {
  if(!existingDL(props)) { return null; }
  let locale = props.locale;
  return (
    <CurrentCardInfo
      {...props}
      currentCardInfo = { props.DLApp.currentCard }
      title           = { translations[locale].summaryPage.myDL.currentCard }
    />
  )
};

export default CurrentDLInfo;