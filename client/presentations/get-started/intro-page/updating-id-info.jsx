'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import { updateID }      from '../../../helpers/data/card-type';
import { getIDString }   from '../../../helpers/data/get-started';
import { convertToHtml } from '../../../i18n/convert-to-html.jsx';

const updatingID = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingID);
const updatingReducedFeeID = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID);
const updatingNoFeeID = <p className='translation-missing'>You are updating a no-fee ID card</p>;
const updatingSeniorID = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID);

const UpdatingIDInfo = (props) => {
  if (!updateID(props)) { return null; }
  let ID = getIDString(props, updatingID, updatingReducedFeeID, updatingNoFeeID, updatingSeniorID);

  return (
    <div className='updating-id-info'>
      {ID}
    </div>
    );
};

export default UpdatingIDInfo;

