'use strict';

import React              from 'react';
import { existingID }     from '../../../../helpers/data/card-type';
import { CurrentCardInfo }from '../current-card-info.jsx';
import translations       from '../../../../i18n';

const CurrentIDInfo = (props) => {
  if(!existingID(props)) { return null; }

  let locale = props.locale;

  return (
    <CurrentCardInfo
      {...props}
      currentCardInfo = { props.IDApp.currentCard }
      title           = { translations[locale].summaryPage.myID.currentCard }
    />
  );
};

export default CurrentIDInfo;

