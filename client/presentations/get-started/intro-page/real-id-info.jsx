'use strict';

import React                from 'react';
import { gettingRealID }    from '../../../helpers/data/real-id';
import { getRealIDString }  from '../../../helpers/data/get-started';
import Translator           from '../../../i18n/translator-tag.jsx';

const RealIDInfo = (props) => {

  const idRealIDKey = 'intro.getStartedPage.whatYouAreDoing.realIDCompliantID';
  const dlRealIDKey = 'intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense';

  if (!gettingRealID(props)) { return null; }
  let realIdCompliant = getRealIDString(props, idRealIDKey, dlRealIDKey);

  return (
    <div className='real-id-info'>
      <Translator tag = 'p' translationPath = { realIdCompliant } />
    </div>
    );
};

export default RealIDInfo;

