'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import Translator       from '../../../../i18n/translator-tag.jsx';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  showLicenseClass
} from '../../../../helpers/data/summary';
import {
  needsEndorsement
} from '../../../../helpers/data/card-type';

const Car = (props) => {
  const classC = <Translator tag = 'span' translationPath = 'intro.getStartedPage.whatYouAreDoing.classes.C' />;
  if (props.array.indexOf('car') === -1) { return null; }
  return <li key='car'>{classC}</li>
};

const Cycle = (props) => {
  const classM = <Translator tag = 'span' translationPath = 'intro.getStartedPage.whatYouAreDoing.classes.M' />;
  if (props.array.indexOf('cycle') === -1) { return null; }
  return <li key='cycle'>{classM}</li>
};

const Long = (props) => {
  const classA = <Translator tag = 'span' translationPath = 'intro.getStartedPage.whatYouAreDoing.classes.A' />;
  if (props.array.indexOf('long') === -1) { return null; }
  return <li key='long'>{classA}</li>
};

const Trailer = (props) => {
  const classB = <Translator tag = 'span' translationPath = 'intro.getStartedPage.whatYouAreDoing.classes.B' />;
  if (props.array.indexOf('trailer') === -1) { return null; }
  return <li key='trailer'>{classB}</li>
};

const Yes = (props) => {
  if (!needsEndorsement(props)) { return null; }
  return (<Translator tag = 'span' translationPath = 'shared.commonAnswers.yes' />);
};

const No = (props) => {
  if (needsEndorsement(props)) { return null; }
  return (<Translator tag = 'span' translationPath = 'shared.commonAnswers.no' />);
};


const LicenseType = (props) => {
  if(!showLicenseClass(props) ) { return null; }
  let vehicles = (
    <div>
      <Car      array = {props.DLApp.licenseType.type} />
      <Cycle    array = {props.DLApp.licenseType.type} />
      <Long     array = {props.DLApp.licenseType.type} />
      <Trailer  array = {props.DLApp.licenseType.type} />
    </div>
  );

  let endorsements = (
    <div>
      <Yes  DLApp = {props.DLApp} />
      <No   DLApp = {props.DLApp} />
    </div>
  );

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'summaryPage.myDL.needToDriver.header'
        text  = { vehicles}
      />
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myDL.firefighterEndorsement'
        text      = { endorsements}
      />
    </PageSummaryLink>
  )
};

export default LicenseType;
