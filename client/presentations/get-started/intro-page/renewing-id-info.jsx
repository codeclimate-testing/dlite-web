'use strict';

import React             from 'react';
import { renewID }       from '../../../helpers/data/card-type';
import { getIDString }   from '../../../helpers/data/get-started';
import translations      from '../../../i18n';
import Translation       from '../../../i18n/translate-tag.jsx';

const RenewingIDInfo = (props) => {
  let locale = props.locale;

  const renewingID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.renewingID}
        </Translation>
  const renewingReducedFeeID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID}
        </Translation>
  const renewingNoFeeID = 
        <Translation tag='p'>
          You are renewing a no-fee ID card
        </Translation>
  const renewingSeniorID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.renewingSeniorID}
        </Translation>

  if(!renewID(props)) { return null; }
  let ID = getIDString(props, renewingID, renewingReducedFeeID, renewingNoFeeID, renewingSeniorID);

  return (
    <div className='renewing-id-info'>
      {ID}
    </div>
  );
};

export default RenewingIDInfo;

