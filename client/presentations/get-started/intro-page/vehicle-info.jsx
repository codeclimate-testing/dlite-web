'use strict';

import React                    from 'react';
import translations             from '../../../i18n';
import { getDL }                from '../../../helpers/data/card-type';
import { getVehicleInfoArray }  from '../../../helpers/data/get-started';
import { convertToHtml }        from '../../../i18n/convert-to-html.jsx';

const classC = convertToHtml('li', translations.intro.getStartedPage.whatYouAreDoing.classes.C, undefined, 'car');
const classM = convertToHtml('li', translations.intro.getStartedPage.whatYouAreDoing.classes.M, undefined, 'cycle');
const classA = convertToHtml('li', translations.intro.getStartedPage.whatYouAreDoing.classes.A, undefined, 'long');
const classB = convertToHtml('li', translations.intro.getStartedPage.whatYouAreDoing.classes.B, undefined, 'trailer');
const toDriveHeader = convertToHtml('h4', translations.intro.getStartedPage.whatYouAreDoing.toDrive);

const VehicleInfo = (props) => {
  if(!getDL(props)) { return null; }
  let vehicles = getVehicleInfoArray(props, classC, classM, classA, classB);

  return (
    <div className='vehicle-info'>
      {toDriveHeader}
      {vehicles}
    </div>
  );
};

export default VehicleInfo;

