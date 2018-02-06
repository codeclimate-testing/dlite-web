'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
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
  let value = 'Yes';
  let vehicles = [];
  props.licenseType.needEndorsement === 'Yes' && props.licenseType.endorsement.indexOf('firefighter') > -1 ? value : value = 'No';

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
    <PageSummaryLink
      to='/license-type'
      name='licenseType'
    >
      <SummaryItem
        title='Need to drive'
        text={vehicles}
      />
      <br></br>
      <SummaryItem
        title='Firefighter endorsement'
        text={value}
      />
    </PageSummaryLink>
  )
};

export default LicenseType;
