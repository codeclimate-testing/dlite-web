'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getID
} from '../../../helpers/data/card-type';

const renewingID = translations.intro.getStartedPage.whatYouAreDoing.renewingID;
const renewingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID;
const renewingNoFeeID = <p className='translation-missing'>You are renewing a no-fee ID card</p>;
const renewingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.renewingSeniorID;

const RenewingIDInfo = (props) => {
  if(!getID(props)) { return null; }
  if(props.cardType.cardAction !== 'renew') { return null; }
  let ID = renewingID

  if(props.reducedFee.ID === 'Yes') {
    ID = renewingReducedFeeID
  }
  if(props.seniorID === 'Yes') {
    ID = renewingNoFeeID
  }
  if(props.seniorID === 'No') {
    ID = renewingSeniorID
  }

  return (
    <div className='renewing-id-info'>
      <p>{ID}</p>
    </div>
  );
};

export default RenewingIDInfo;

