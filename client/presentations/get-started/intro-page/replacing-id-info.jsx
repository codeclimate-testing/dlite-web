'use strict';

import React              from 'react';
import { getIDString }    from '../../../helpers/data/get-started';
import { replaceID }      from '../../../helpers/data/card-type';
import Translator         from '../../../i18n/translator-tag.jsx';

const ReplacingIDInfo = (props) => {
  const replacingID           = <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.replacingID' />
  const replacingReducedFeeID = <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID' />
  const replacingNoFeeID      = <p className='translation-missing'> You are replacing a no-fee ID card </p>
  const replacingSeniorID     = <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.replacingSeniorID' />

  if(!replaceID(props)) { return null; }
  let ID = getIDString(props, replacingID, replacingReducedFeeID, replacingNoFeeID, replacingSeniorID);

  return (
    <div className='replacing-id-info'>
      {ID}
    </div>
    );
};

export default ReplacingIDInfo;

