'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import { renewID }      from '../../../helpers/data/card-type';
import { getIDString }  from '../../../helpers/data/get-started';

const renewingID = translations.intro.getStartedPage.whatYouAreDoing.renewingID;
const renewingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID;
const renewingNoFeeID = <p className='translation-missing'>You are renewing a no-fee ID card</p>;
const renewingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.renewingSeniorID;

const RenewingIDInfo = (props) => {
  if(!renewID(props)) { return null; }
  let ID = getIDString(props, renewingID, renewingReducedFeeID, renewingNoFeeID, renewingSeniorID);

  return (
    <div className='renewing-id-info'>
      <p>{ID}</p>
    </div>
  );
};

export default RenewingIDInfo;

