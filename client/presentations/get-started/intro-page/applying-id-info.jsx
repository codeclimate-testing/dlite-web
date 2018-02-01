'use strict';

import React                  from 'react';
import translations from '../../../i18n';

import {
  getNewID,
  getIDInfoString
} from '../../../helpers/data/get-started';

const newID = translations.intro.getStartedPage.whatYouAreDoing.applyingID;
const reducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.applyingReducedFeeID;
const noFeeID = <p className='translation-missing'>You are applying for a no-fee ID card</p>;
const seniorID = translations.intro.getStartedPage.whatYouAreDoing.applyingSeniorID;

const ApplyingIDInfo = (props) => {
  if(!getNewID(props)) { return null; }

  let ID = getIDInfoString(props, newID, reducedFeeID, noFeeID, seniorID);

  return (
    <div className='applying-id-info'>
      <p>{ID}</p>
    </div>
  );
};

export default ApplyingIDInfo;

