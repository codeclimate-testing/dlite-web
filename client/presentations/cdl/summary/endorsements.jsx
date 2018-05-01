'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import { hasValue }     from '../../../helpers/data/validations';
import {
  showCDLEndorsements
} from '../../../helpers/data/cdl';
import Translator       from '../../../i18n/translator-tag.jsx';

const DoubleTriple = (props) => {
  const doubleTriple = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.T' />;
  if (props.array.indexOf('doubleTriple') === -1) { return null; }
  return <li key='droubleTriple'>{doubleTriple}</li>
};

const PassengerVehicle = (props) => {
  const passengerVehicle = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.P' />;
  if (props.array.indexOf('passengerVehicle') === -1) { return null; }
  return <li key='passengerVehicle'>{passengerVehicle}</li>
};

const SchoolBus = (props) => {
  const schoolBus = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.S' />;
  if (props.array.indexOf('schoolBus') === -1) { return null; }
  return <li key='schoolBus'>{schoolBus}</li>
};

const TankVehicles = (props) => {
  const tankVehicles = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.N' />;
  if (props.array.indexOf('tank') === -1) { return null; }
  return <li key='tank'>{tankVehicles}</li>
};

const HazMat = (props) => {
  const hazMat = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.H' />;
  if (props.array.indexOf('hazmat') === -1) { return null; }
  return <li key='hazmat'>{hazMat}</li>
};

const TankHazMat = (props) => {
  const tankHazmat = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.X' />;
  if (props.array.indexOf('tankHazmat') === -1) { return null; }
  return <li key='tankHazmat'>{tankHazmat}</li>
};

const Firefighter = (props) => {
  const firefighter = <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.F' />;
  if (props.array.indexOf('firefighter') === -1) { return null; }
  return <li key='firefighter'>{firefighter}</li>
};

const CDLEndorsements = (props) => {
  if(!showCDLEndorsements(props.cdlEndorsements) ) { return null; }
  let endorsements = (
    <div>
      <DoubleTriple     array = {props.cdlEndorsements.type} />
      <PassengerVehicle array = {props.cdlEndorsements.type} />
      <SchoolBus        array = {props.cdlEndorsements.type} />
      <TankVehicles     array = {props.cdlEndorsements.type} />
      <HazMat           array = {props.cdlEndorsements.type} />
      <TankHazMat       array = {props.cdlEndorsements.type} />
      <Firefighter      array = {props.cdlEndorsements.type} />
    </div>
  );

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'newExtracted.conclusion.summary.endorsements'
        text  = {endorsements}
      />
    </PageSummaryLink>
  )
};

export default CDLEndorsements;
