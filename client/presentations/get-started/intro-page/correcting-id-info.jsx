'use strict';

import React          from 'react';
import translations   from '../../../i18n';
import { correctID }  from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import {
  getIDString
} from '../../../helpers/data/get-started';

const correctingID = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.correctingID);
const correctingReducedFeeID = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID);
const correctingNoFeeID = <p className='translation-missing'>You are correcting a no-fee ID card</p>;
const correctingSeniorID = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.correctingSeniorID);

const CorrectingIDInfo = (props) => {
  if(!correctID(props)) { return null; }
  let ID = getIDString(props, correctingID, correctingReducedFeeID, correctingNoFeeID, correctingSeniorID);

  return (
    <div className='correcting-id-info'>
      {ID}
    </div>
    );
};

export default CorrectingIDInfo;

