'use strict';

import React              from 'react';
import { getIDString }    from '../../../helpers/data/get-started';
import { replaceID }      from '../../../helpers/data/card-type';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const ReplacingIDInfo = (props) => {
  let locale = props.locale;
  const replacingID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.replacingID}
        </Translation>
    
  const replacingReducedFeeID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID}
        </Translation>
    
  const replacingNoFeeID = 
        <Translation tag='p' className='translation-missing'>
          You are replacing a no-fee ID card
        </Translation>
    
  const replacingSeniorID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.replacingSeniorID}
        </Translation>

  if(!replaceID(props)) { return null; }
  let ID = getIDString(props, replacingID, replacingReducedFeeID, replacingNoFeeID, replacingSeniorID);

  return (
    <div className='replacing-id-info'>
      {ID}
    </div>
    );
};

export default ReplacingIDInfo;

