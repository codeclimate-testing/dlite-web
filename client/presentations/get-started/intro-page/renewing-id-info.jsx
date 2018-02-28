'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import { renewID }       from '../../../helpers/data/card-type';
import { getIDString }   from '../../../helpers/data/get-started';
import { convertToHtml } from '../../../i18n/convert-to-html.jsx';

const RenewingIDInfo = (props) => {
  let locale = props.locale;
  const renewingID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.renewingID);
  const renewingReducedFeeID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID);
  const renewingNoFeeID = <p className='translation-missing'>You are renewing a no-fee ID card</p>;
  const renewingSeniorID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.renewingSeniorID);

  if(!renewID(props)) { return null; }
  let ID = getIDString(props, renewingID, renewingReducedFeeID, renewingNoFeeID, renewingSeniorID);

  return (
    <div className='renewing-id-info'>
      {ID}
    </div>
  );
};

export default RenewingIDInfo;

