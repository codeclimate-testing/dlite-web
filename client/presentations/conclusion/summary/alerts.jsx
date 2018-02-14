'use strict';

import React              from 'react';
import { tooYoungForDL }  from '../../../helpers/data/youth';
import { getID }          from '../../../helpers/data/card-type';
import translations       from '../../../i18n';

const DLAlert = () => {
  return (
    <h4 className='youth-license-notification translation-missing'>
      If you go to the DMV office to finish your license application before you are 15.5 years old, you can only get a Junior permit. These permits are issued only in exceptional circumstances.
    </h4>
  );
};

const IDAlert = (props) => {
  if(!getID(props)) { return null; }
  return (
    <h4 className='youth-license-notification translation-missing'>
      You are eligible to complete your ID application in the office today.
    </h4>
  )
};

const Alerts = (props) => {
  if (!tooYoungForDL(props)) { return null; }

  return (
    <div>
      <DLAlert/>
      <IDAlert
        cardType = {props.cardType}
      />
    </div>
  );
};

export default Alerts;