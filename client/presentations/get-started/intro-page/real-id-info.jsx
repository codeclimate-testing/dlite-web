'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import { gettingRealID }    from '../../../helpers/data/real-id';
import { getRealIDString }  from '../../../helpers/data/get-started';

const idRealID = translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantID;
const dlRealID = translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense;

const RealIDInfo = (props) => {
  if (!gettingRealID(props)) { return null; }
  let realIdCompliant = getRealIDString(props, idRealID, dlRealID);

  return (
    <div className='real-id-info'>
      <p>{realIdCompliant}</p>
    </div>
    );
};

export default RealIDInfo;

