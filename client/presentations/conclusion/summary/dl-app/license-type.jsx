'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import translations     from '../../../../i18n';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../Summary-item.jsx';
import {
  showLicenseClass
} from '../../../../helpers/data/summary';
import {
  needsEndorsement
} from '../../../../helpers/data/card-type';

const classC = translations.intro.getStartedPage.whatYouAreDoing.classes.C;
const classM = translations.intro.getStartedPage.whatYouAreDoing.classes.M;
const classA = translations.intro.getStartedPage.whatYouAreDoing.classes.A;
const classB = translations.intro.getStartedPage.whatYouAreDoing.classes.B;


const Car = (props) => {
  if (props.array.indexOf('car') === -1) { return null; }
  return <li key='car'>{classC}</li>
};

const Cycle = (props) => {
  if (props.array.indexOf('cycle') === -1) { return null; }
  return <li key='cycle'>{classM}</li>
};

const Long = (props) => {
  if (props.array.indexOf('long') === -1) { return null; }
  return <li key='long'>{classA}</li>
};

const Trailer = (props) => {
  if (props.array.indexOf('trailer') === -1) { return null; }
  return <li key='trailer'>{classB}</li>
};

const Yes = (props) => {
  if (!needsEndorsement(props)) { return null; }
  return translations.shared.commonAnswers.yes;
};

const No = (props) => {
  if (needsEndorsement(props)) { return null; }
  return translations.shared.commonAnswers.no;
};


const LicenseType = (props) => {
  if(!showLicenseClass(props) ) { return null; }

  let vehicles = (
    <div>
      <Car array = {props.DLApp.licenseType.type} />
      <Cycle array = {props.DLApp.licenseType.type} />
      <Long array = {props.DLApp.licenseType.type} />
      <Trailer array = {props.DLApp.licenseType.type} />
    </div>
  );

  let endorsements = (
    <div>
      <Yes DLApp = {props.DLApp} />
      <No DLApp = {props.DLApp} />
    </div>
  );

  return (
    <PageSummaryLink
      name= 'addLicenseClass'
      summary = {props.summary}
    >
      <SummaryItem
        title='Need to drive'
        text={vehicles}
      />
      <SummaryItem
        title='Firefighter endorsement'
        text={endorsements}
      />
    </PageSummaryLink>
  )
};

export default LicenseType;
