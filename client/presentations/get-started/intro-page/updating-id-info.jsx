'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import { updateID }     from '../../../helpers/data/card-type';
import { getIDString }  from '../../../helpers/data/get-started';

const updatingID = translations.intro.getStartedPage.whatYouAreDoing.updatingID;
const updatingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID;
const updatingNoFeeID = <p className='translation-missing'>You are updating a no-fee ID card</p>;
const updatingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID;

const UpdatingIDInfo = (props) => {
  if (!updateID(props)) { return null; }
  let ID = getIDString(props, updatingID, updatingReducedFeeID, updatingNoFeeID, updatingSeniorID);

  return (
    <div className='updating-id-info'>
      <p>{ID}</p>
    </div>
    );
};

export default UpdatingIDInfo;

