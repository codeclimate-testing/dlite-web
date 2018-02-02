'use strict';

import React                    from 'react';
import translations             from '../../../i18n';
import { getDL }                from '../../../helpers/data/card-type';
import { getVehicleInfoArray }  from '../../../helpers/data/get-started';

const classC = <li key='car'>{translations.intro.getStartedPage.whatYouAreDoing.classes.C}</li>;
const classM = <li key='cycle'>{translations.intro.getStartedPage.whatYouAreDoing.classes.M}</li>;
const classA = <li key='long'>{translations.intro.getStartedPage.whatYouAreDoing.classes.A}</li>;
const classB = <li key='trailer'>{translations.intro.getStartedPage.whatYouAreDoing.classes.B}</li>;
const toDriveHeader = <h4>{translations.intro.getStartedPage.whatYouAreDoing.toDrive}</h4>

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

