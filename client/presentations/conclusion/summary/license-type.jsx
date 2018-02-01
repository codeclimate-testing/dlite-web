'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import translations     from '../../../i18n';
import SummaryItem      from './summary-item.jsx';
import {
  getDL
} from '../../../helpers/data/card-type';

const classC = translations.intro.getStartedPage.whatYouAreDoing.classes.C;
const classM = translations.intro.getStartedPage.whatYouAreDoing.classes.M;
const classA = translations.intro.getStartedPage.whatYouAreDoing.classes.A;
const classB = translations.intro.getStartedPage.whatYouAreDoing.classes.B;

const LicenseType = (props) => {
  if(!getDL(props)) { return null; }
  props.licenseType.endorsement === 'firefighter' ? value : value = 'No';
  let value = 'Yes';
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
    <div>
      <SummaryItem
        title='Need to drive'
        text={vehicles}
      />
      <SummaryItem
        title='Firefighter endorsement'
        text={value}
      />
    </div>
  )

};

export default LicenseType;
