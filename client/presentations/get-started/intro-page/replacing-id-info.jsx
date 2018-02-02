'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import { getIDString }  from '../../../helpers/data/get-started';
import { replaceID }    from '../../../helpers/data/card-type';

const replacingID = translations.intro.getStartedPage.whatYouAreDoing.replacingID;
const replacingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID;
const replacingNoFeeID = <p className='translation-missing'>You are replacing a no-fee ID card</p>;
const replacingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.replacingSeniorID;

const ReplacingIDInfo = (props) => {
  if(!replaceID(props)) { return null; }
  let ID = getIDString(props, replacingID, replacingReducedFeeID, replacingNoFeeID, replacingSeniorID);

  return (
    <div className='replacing-id-info'>
      <p>{ID}</p>
    </div>
    );
};

export default ReplacingIDInfo;

