'use strict';

import React              from 'react';
import translations       from '../../../i18n';
import { getIDString }    from '../../../helpers/data/get-started';
import { replaceID }      from '../../../helpers/data/card-type';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const ReplacingIDInfo = (props) => {
  let locale = props.locale;
  const replacingID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.replacingID);
  const replacingReducedFeeID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID);
  const replacingNoFeeID = <p className='translation-missing'>You are replacing a no-fee ID card</p>;
  const replacingSeniorID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.replacingSeniorID);

  if(!replaceID(props)) { return null; }
  let ID = getIDString(props, replacingID, replacingReducedFeeID, replacingNoFeeID, replacingSeniorID);

  return (
    <div className='replacing-id-info'>
      {ID}
    </div>
    );
};

export default ReplacingIDInfo;

