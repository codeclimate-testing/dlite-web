'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import {
  getStringByAction
} from '../../../helpers/data/card-actions';

const newDL = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.applyingLicense);
const renewingDL = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.renewingLicense);
const updatingDL = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingLicense);
const correctingDL = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.correctingLicense);
const replacingDL = convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.replacingLicense);

const DLInfo = (props) => {
  if(!getDL(props)) { return null; }
  let DL = getStringByAction(props, newDL, renewingDL, replacingDL, null, updatingDL, correctingDL);

  return (
    <div className='dl-info'>
      {DL}
    </div>
  );
};

export default DLInfo;

