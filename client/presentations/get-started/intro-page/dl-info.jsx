'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL
} from '../../../helpers/data/card-type';

const newDL = translations.intro.getStartedPage.whatYouAreDoing.applyingLicense
const renewingDL = translations.intro.getStartedPage.whatYouAreDoing.renewingLicense
const updatingDL = translations.intro.getStartedPage.whatYouAreDoing.updatingLicense
const correctingDL = translations.intro.getStartedPage.whatYouAreDoing.correctingLicense
const replacingDL = translations.intro.getStartedPage.whatYouAreDoing.replacingLicense

const DLInfo = (props) => {
  if(!getDL(props)) { return null; }
  let DL = '';

  switch(props.cardType.cardAction) {
    case 'new':
      DL = newDL;
      break;
    case 'renew':
      DL = renewingDL;
      break;
    case 'replace':
      DL = replacingDL;
      break;
    case 'change':
      if(props.cardChanges.correctOrUpdate === 'update') {
        DL = updatingDL;
      } else if(props.cardChanges.correctOrUpdate === 'correct') {
        DL = correctingDL;
      }
      break;
    default:
      DL;
  }

  return (
    <div className='dl-info'>
      <p>{DL}</p>
    </div>
  );
};

export default DLInfo;

