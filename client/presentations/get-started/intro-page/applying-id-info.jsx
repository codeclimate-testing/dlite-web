'use strict';

import React                  from 'react';
import { getNewID }           from '../../../helpers/data/card-type';
import Translator             from '../../../i18n/translator-tag.jsx';
import {
  getIDString
} from '../../../helpers/data/get-started';

const ApplyingIDInfo = (props) => {

  const newID         = <Translator  tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.applyingID' />
  const reducedFeeID  = <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.applyingReducedFeeID' />
  const noFeeID       = <Translator tag='p' translationPath = 'newExtracted.intro.getStartedPage.whatYouAreDoing.applyNoFeeID'/>
  const seniorID      = <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.applyingSeniorID' />

  if(!getNewID(props)) { return null; }

  let ID = getIDString(props, newID, reducedFeeID, noFeeID, seniorID);

  return (
    <div className='applying-id-info'>
      {ID}
    </div>
  );
};

export default ApplyingIDInfo;
