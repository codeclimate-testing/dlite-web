'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getID
} from '../../../helpers/data/card-type';

const newID = translations.intro.getStartedPage.whatYouAreDoing.applyingID;
const reducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.applyingReducedFeeID;
const noFeeID = <p className='translation-missing'>You are applying for a no-fee ID card</p>;
const seniorID = translations.intro.getStartedPage.whatYouAreDoing.applyingSeniorID;

const ApplyingIDInfo = (props) => {
  if(!getID(props)) { return null; }
  if(props.cardType.cardAction !== 'new') { return null; }
  let ID = newID

  if(props.reducedFee.ID === 'Yes') {
    ID = reducedFeeID
  }
  if(props.seniorID === 'Yes') {
    ID = noFeeID
  }
  if(props.seniorID === 'No') {
    ID = seniorID
  }

  return (
    <div className='applying-id-info'>
      <p>{ID}</p>
    </div>
  );
};

export default ApplyingIDInfo;

