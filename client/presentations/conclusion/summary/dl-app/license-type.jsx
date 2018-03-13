'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import translations     from '../../../../i18n';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  showLicenseClass
} from '../../../../helpers/data/summary';
import {
  needsEndorsement
} from '../../../../helpers/data/card-type';

const Car = (props) => {
  let locale = props.locale;
  const classC = translations[locale].intro.getStartedPage.whatYouAreDoing.classes.C;
  if (props.array.indexOf('car') === -1) { return null; }
  return <li key='car'>{classC}</li>
};

const Cycle = (props) => {
  let locale = props.locale;
  const classM = translations[locale].intro.getStartedPage.whatYouAreDoing.classes.M;
  if (props.array.indexOf('cycle') === -1) { return null; }
  return <li key='cycle'>{classM}</li>
};

const Long = (props) => {
  let locale = props.locale;
  const classA = translations[locale].intro.getStartedPage.whatYouAreDoing.classes.A;
  if (props.array.indexOf('long') === -1) { return null; }
  return <li key='long'>{classA}</li>
};

const Trailer = (props) => {
  let locale = props.locale;
  const classB = translations[locale].intro.getStartedPage.whatYouAreDoing.classes.B;
  if (props.array.indexOf('trailer') === -1) { return null; }
  return <li key='trailer'>{classB}</li>
};

const Yes = (props) => {
  if (!needsEndorsement(props)) { return null; }
  let locale = props.locale;
  return translations[locale].shared.commonAnswers.yes;
};

const No = (props) => {
  if (needsEndorsement(props)) { return null; }
  let locale = props.locale;
  return translations[locale].shared.commonAnswers.no;
};


const LicenseType = (props) => {
  if(!showLicenseClass(props) ) { return null; }
  let locale = props.locale;
  let vehicles = (
    <div>
      <Car      array = {props.DLApp.licenseType.type} locale = {locale}/>
      <Cycle    array = {props.DLApp.licenseType.type} locale = {locale}/>
      <Long     array = {props.DLApp.licenseType.type} locale = {locale}/>
      <Trailer  array = {props.DLApp.licenseType.type} locale = {locale}/>
    </div>
  );

  let endorsements = (
    <div>
      <Yes  DLApp = {props.DLApp} locale = {locale}/>
      <No   DLApp = {props.DLApp} locale = {locale}/>
    </div>
  );

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = { translations[locale].summaryPage.myDL.needToDriver.header }
        text  = { vehicles}
      />
      <SummaryItem
        title = { translations[locale].summaryPage.myDL.firefighterEndorsement }
        text  = { endorsements}
      />
    </PageSummaryLink>
  )
};

export default LicenseType;
