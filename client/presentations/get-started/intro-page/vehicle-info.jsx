'use strict';

import React                    from 'react';
import { getDL }                from '../../../helpers/data/card-type';
import { getVehicleInfoArray }  from '../../../helpers/data/get-started';
import translations             from '../../../i18n';
import Translation              from '../../../i18n/translate-tag.jsx';

const VehicleInfo = (props) => {
  let locale = props.locale;
  const classC =
    <Translation tag='li' key='car'>
      {translations[locale].intro.getStartedPage.whatYouAreDoing.classes.C}
    </Translation>
          
  const classM =
    <Translation tag='li' key='cycle'>
      {translations[locale].intro.getStartedPage.whatYouAreDoing.classes.M}
    </Translation>
    
  const classA =
    <Translation tag='li' key='long'>
      {translations[locale].intro.getStartedPage.whatYouAreDoing.classes.A}
    </Translation>
    
  const classB =
    <Translation tag='li' key='trailer'>
      {translations[locale].intro.getStartedPage.whatYouAreDoing.classes.B}
    </Translation>
    
  const toDriveHeader =
    <Translation tag='h4'>
      {translations[locale].intro.getStartedPage.whatYouAreDoing.toDrive}
    </Translation>

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

