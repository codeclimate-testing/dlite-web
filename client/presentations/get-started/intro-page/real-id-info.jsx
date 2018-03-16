'use strict';

import React                from 'react';
import { gettingRealID }    from '../../../helpers/data/real-id';
import { getRealIDString }  from '../../../helpers/data/get-started';
import translations         from '../../../i18n';
import Translation          from '../../../i18n/translate-tag.jsx';

const RealIDInfo = (props) => {
  let locale = props.locale;

  const idRealID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.realIDCompliantID}
        </Translation>
  const dlRealID = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense}
        </Translation>
  if (!gettingRealID(props)) { return null; }
  let realIdCompliant = getRealIDString(props, idRealID, dlRealID);

  return (
    <div className='real-id-info'>
      {realIdCompliant}
    </div>
    );
};

export default RealIDInfo;

