'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getID
} from '../../../helpers/data/card-type';

const updatingID = translations.intro.getStartedPage.whatYouAreDoing.updatingID;
const updatingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID;
const updatingNoFeeID = <p className='translation-missing'>You are updating a no-fee ID card</p>;
const updatingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID;

const UpdatingIDInfo = (props) => {
  if(!getID(props)) { return null; }
  if(props.cardType.cardAction !== 'change') { return null; }
  if(props.cardChanges.correctOrUpdate !== 'update') { return null; }
  let ID = updatingID

  if(props.reducedFee.ID === 'Yes') {
    ID = updatingReducedFeeID
  }
  if(props.seniorID === 'Yes') {
    ID = updatingNoFeeID
  }
  if(props.seniorID === 'No') {
    ID = updatingSeniorID
  }

  return (
    <div className='updating-id-info'>
      <p>{ID}</p>
    </div>
    );
};

export default UpdatingIDInfo;

