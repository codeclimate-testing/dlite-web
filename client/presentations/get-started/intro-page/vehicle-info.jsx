'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL
} from '../../../helpers/data/card-type';

const classC = translations.intro.getStartedPage.whatYouAreDoing.classes.C;
const classM = translations.intro.getStartedPage.whatYouAreDoing.classes.M;
const classA = translations.intro.getStartedPage.whatYouAreDoing.classes.A;
const classB = translations.intro.getStartedPage.whatYouAreDoing.classes.B;
const toDriveHeader = <h4>{translations.intro.getStartedPage.whatYouAreDoing.toDrive}</h4>

const VehicleInfo = (props) => {
  if(!getDL(props)) { return null; }
  let vehicles = [];

  if(props.licenseType.type.indexOf('car') > -1) {
    vehicles.push(<li key='car'>{classC}</li>)
  }
  if(props.licenseType.type.indexOf('cycle') > -1) {
    vehicles.push(<li key='cycle'>{classM}</li>)
  }
  if(props.licenseType.type.indexOf('long') > -1) {
    vehicles.push(<li key='long'>{classA}</li>)
  }
  if(props.licenseType.type.indexOf('trailer') > -1) {
    vehicles.push(<li key='trailer'>{classB}</li>)
  }

  return (
    <div className='vehicle-info'>
      {toDriveHeader}
      {vehicles}
      <br></br>
    </div>
  );
};

export default VehicleInfo;

