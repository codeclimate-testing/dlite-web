'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import {
  hasActionIsCorrecting
} from '../../../helpers/data/card-actions';
import { getCorrectString }   from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const licenseCorrection = convertToHtml('p', translations.intro.getStartedPage.explanation.correct.license)
const IDCorrection = convertToHtml('p', translations.intro.getStartedPage.explanation.correct.id)

const CorrectApplicationInfo = (props) => {
  if( !hasActionIsCorrecting(props)) { return null; }
  let correctInfo = getCorrectString(props, licenseCorrection, IDCorrection);

  return (
    <div className='correct-application-info'>
      {correctInfo}
    </div>
    );
};

export default CorrectApplicationInfo;

