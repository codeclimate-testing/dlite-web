'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import {
  getStringByAction
} from '../../../helpers/data/card-actions';

const newDL = translations.intro.getStartedPage.whatYouAreDoing.applyingLicense
const renewingDL = translations.intro.getStartedPage.whatYouAreDoing.renewingLicense
const updatingDL = translations.intro.getStartedPage.whatYouAreDoing.updatingLicense
const correctingDL = translations.intro.getStartedPage.whatYouAreDoing.correctingLicense
const replacingDL = translations.intro.getStartedPage.whatYouAreDoing.replacingLicense

const DLInfo = (props) => {
  if(!getDL(props)) { return null; }
  let DL = getStringByAction(props, newDL, renewingDL, replacingDL, null, updatingDL, correctingDL);

  return (
    <div className='dl-info'>
      <p>{DL}</p>
    </div>
  );
};

export default DLInfo;

