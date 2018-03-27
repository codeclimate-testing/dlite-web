'use strict';

import React                    from 'react';
import { getDL }                from '../../../helpers/data/card-type';
import { getVehicleInfoArray }  from '../../../helpers/data/get-started';
import Translator               from '../../../i18n/translator-tag.jsx';

const VehicleInfo = (props) => {

  const classC = 'intro.getStartedPage.whatYouAreDoing.classes.C';
  const classM = 'intro.getStartedPage.whatYouAreDoing.classes.M';
  const classA = 'intro.getStartedPage.whatYouAreDoing.classes.A';
  const classB = 'intro.getStartedPage.whatYouAreDoing.classes.B';

  if(!getDL(props)) { return null; }
  let vehicles      = getVehicleInfoArray(props, classC, classM, classA, classB);
  let vehiclesList  = vehicles.map((translationPath, i) => {
    return (
      <Translator
        tag             = 'li'
        key             = { i }
        keyProp         = { i }
        translationPath = { translationPath }
      />
    );
  });
  return (
    <div className='vehicle-info'>
      <Translator
        tag             = 'h4'
        translationPath = 'intro.getStartedPage.whatYouAreDoing.toDrive'
      />
     { vehiclesList }
    </div>
  );
};

export default VehicleInfo;

