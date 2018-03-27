'use strict';

import React             from 'react';
import { renewID }       from '../../../helpers/data/card-type';
import { getIDString }   from '../../../helpers/data/get-started';
import Translator        from '../../../i18n/translator-tag.jsx';

const RenewingIDInfo = (props) => {

  const renewingID            = 'intro.getStartedPage.whatYouAreDoing.renewingID';
  const renewingReducedFeeID  = 'intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID';
  //TODO: Translation keys
  const renewingNoFeeID       = 'You are renewing a no-fee ID card'
  const renewingSeniorID      = 'intro.getStartedPage.whatYouAreDoing.renewingSeniorID';

  if(!renewID(props)) { return null; }
  let IDKey = getIDString(props, renewingID, renewingReducedFeeID, renewingNoFeeID, renewingSeniorID);

  return (
    <div className='renewing-id-info'>
      <Translator tag = 'p' translationPath = { IDKey } />
    </div>
  );
};

export default RenewingIDInfo;

