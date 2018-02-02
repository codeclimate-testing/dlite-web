'use strict';

import React          from 'react';
import translations   from '../../../i18n';
import { correctID }  from '../../../helpers/data/card-type';
import {
  getIDString
} from '../../../helpers/data/get-started';

const correctingID = translations.intro.getStartedPage.whatYouAreDoing.correctingID;
const correctingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID;
const correctingNoFeeID = <p className='translation-missing'>You are correcting a no-fee ID card</p>;
const correctingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.correctingSeniorID;

const CorrectingIDInfo = (props) => {
  if(!correctID(props)) { return null; }
  let ID = getIDString(props, correctingID, correctingReducedFeeID, correctingNoFeeID, correctingSeniorID);

  return (
    <div className='correcting-id-info'>
      <p>{ID}</p>
    </div>
    );
};

export default CorrectingIDInfo;

