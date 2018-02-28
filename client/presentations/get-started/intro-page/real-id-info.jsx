'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import { gettingRealID }    from '../../../helpers/data/real-id';
import { getRealIDString }  from '../../../helpers/data/get-started';
import { convertToHtml }    from '../../../i18n/convert-to-html.jsx';

const RealIDInfo = (props) => {
  let locale = props.locale;
  const idRealID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.realIDCompliantID);
  const dlRealID = convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense);

  if (!gettingRealID(props)) { return null; }
  let realIdCompliant = getRealIDString(props, idRealID, dlRealID);

  return (
    <div className='real-id-info'>
      {realIdCompliant}
    </div>
    );
};

export default RealIDInfo;

