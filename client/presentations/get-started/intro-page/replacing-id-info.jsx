'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getID
} from '../../../helpers/data/card-type';

const replacingID = translations.intro.getStartedPage.whatYouAreDoing.replacingID;
const replacingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID;
const replacingNoFeeID = <p className='translation-missing'>You are replacing a no-fee ID card</p>;
const replacingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.replacingSeniorID;

const ReplacingIDInfo = (props) => {
  if(!getID(props)) { return null; }
  if(props.cardType.cardAction !== 'replace') { return null; }
  let ID = replacingID

  if(props.reducedFee.ID === 'Yes') {
    ID = replacingReducedFeeID
  }
  if(props.seniorID === 'Yes') {
    ID = replacingNoFeeID
  }
  if(props.seniorID === 'No') {
    ID = replacingSeniorID
  }

  return (
    <div className='replacing-id-info'>
      <p>{ID}</p>
    </div>
    );
};

export default ReplacingIDInfo;

