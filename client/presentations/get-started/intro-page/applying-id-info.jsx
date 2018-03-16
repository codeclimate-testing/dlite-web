'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import { getNewID } from '../../../helpers/data/card-type';
import Translation        from '../../../i18n/translate-tag.jsx';
import {
  getIDString
} from '../../../helpers/data/get-started';

const ApplyingIDInfo = (props) => {
  let locale = props.locale;
  const newID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.applyingID}
        </Translation>
  const reducedFeeID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.applyingReducedFeeID}
        </Translation>
  const noFeeID = 
        <Translation tag='p' className='translation-missing'>
          You are applying for a no-fee ID card
        </Translation>
  const seniorID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.applyingSeniorID}
        </Translation>

  if(!getNewID(props)) { return null; }

  let ID = getIDString(props, newID, reducedFeeID, noFeeID, seniorID);

  return (
    <div className='applying-id-info'>
      {ID}
    </div>
  );
};

export default ApplyingIDInfo;

