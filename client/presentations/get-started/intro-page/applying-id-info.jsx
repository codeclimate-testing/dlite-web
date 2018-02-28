'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import { getNewID } from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import {
  getIDString
} from '../../../helpers/data/get-started';

const ApplyingIDInfo = (props) => {
  let locale = props.locale;
  const newID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.applyingID)
  const reducedFeeID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.applyingReducedFeeID)
  const noFeeID = <p className='translation-missing'>You are applying for a no-fee ID card</p>;
  const seniorID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.applyingSeniorID)

  if(!getNewID(props)) { return null; }

  let ID = getIDString(props, newID, reducedFeeID, noFeeID, seniorID);

  return (
    <div className='applying-id-info'>
      {ID}
    </div>
  );
};

export default ApplyingIDInfo;

