'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getDL
} from '../../../helpers/data/card-type';
import {
  getStringByEndorsements
} from '../../../helpers/data/summary';

const classC = translations.intro.getStartedPage.whatYouAreDoing.classes.C;
const classM = translations.intro.getStartedPage.whatYouAreDoing.classes.M;
const classA = translations.intro.getStartedPage.whatYouAreDoing.classes.A;
const classB = translations.intro.getStartedPage.whatYouAreDoing.classes.B;


const Car = (props) => {
  if (props.array.indexOf('car') === -1) { return null; }
  return <li key='car'>{classC}</li>
};

const Cycle = (props) => {
  if (props.array.includes('cycle') === -1) { return null; }
  return <li key='cycle'>{classM}</li>
};

const Long = (props) => {
  if (props.array.includes('long') === -1) { return null; }
  return <li key='long'>{classA}</li>
};

const Trailer = (props) => {
  if (props.array.includes('trailer') === -1) { return null; }
  return <li key='trailer'>{classB}</li>
};

const LicenseType = (props) => {
  if(!getDL(props)) { return null; }

  const yesString = 'Yes';
  const noString = 'No';
  let value = getStringByEndorsements(props, yesString, noString);

  let vehicles = (
    <div>
      <Car array = {props.licenseType.type} />
      <Cycle array = {props.licenseType.type} />
      <Long array = {props.licenseType.type} />
      <Trailer array = {props.licenseType.type} />
    </div>
  );

  return (
    <PageSummaryLink
      to='/license-type'
      name='licenseType'
    >
      <SummaryItem
        title='Need to drive'
        text={vehicles}
      />
      <SummaryItem
        title='Firefighter endorsement'
        text={value}
      />
    </PageSummaryLink>
  )
};

export default LicenseType;
