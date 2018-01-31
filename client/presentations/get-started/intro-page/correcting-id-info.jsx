'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getID
} from '../../../helpers/data/card-type';

const correctingID = translations.intro.getStartedPage.whatYouAreDoing.correctingID;
const correctingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID;
const correctingNoFeeID = <p className='translation-missing'>You are correcting a no-fee ID card</p>;
const correctingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.correctingSeniorID;

const CorrectingIDInfo = (props) => {
  if(!getID(props)) { return null; }
  if(props.cardType.cardAction !== 'change') { return null; }
  if(props.cardChanges.correctOrUpdate !== 'correct') { return null; }
  let ID = correctingID

  if(props.reducedFee.ID === 'Yes') {
    ID = correctingReducedFeeID
  }
  if(props.seniorID === 'Yes') {
    ID = correctingNoFeeID
  }
  if(props.seniorID === 'No') {
    ID = correctingSeniorID
  }

  return (
    <div className='correcting-id-info'>
      <p>{ID}</p>
    </div>
    );
};

export default CorrectingIDInfo;

