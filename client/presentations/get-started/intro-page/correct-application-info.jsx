'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL,
  getID
} from '../../../helpers/data/card-type';

const licenseCorrection = translations.intro.getStartedPage.explanation.correct.license;
const IDCorrection = translations.intro.getStartedPage.explanation.correct.id;

const CorrectApplicationInfo = (props) => {
  if(props.cardType.cardAction !== 'change') { return null; }
  if(props.cardChanges.correctOrUpdate !== 'correct') { return null; }
  let correctInfo = '';

  if(getDL(props)) {
    correctInfo = licenseCorrection;
  }

  if(getID(props)) {
    correctInfo = IDCorrection;
  }

  return (
    <div className='correct-application-info'>
      <p>{correctInfo}</p>
    </div>
    );
};

export default CorrectApplicationInfo;

