'use strict';

import React          from 'react';
import translations   from '../../../i18n';

import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import { correctID }          from '../../../helpers/data/card-type';


const Senior = (props) => {
  let locale = props.locale;
  if (!gettingSeniorID(props)) { return null; }
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.correctingSeniorID);
};

const Reduced = (props) => {
  let locale = props.locale;
  if (!choosingReducedFee(props.IDApp)) { return null; }
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID);
};

const Regular = (props) => {
  let locale = props.locale;
  if (gettingSeniorID(props) || choosingReducedFee(props.IDApp)) { return null; }
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.correctingID);
};


const CorrectingIDInfo = (props) => {
  if(!correctID(props)) { return null; }
  let locale = props.locale;
  return (
    <div className='correcting-id-info'>
      <Senior   IDApp = {props.IDApp } locale = {locale} />
      <Reduced  IDApp = {props.IDApp } locale = {locale} />
      <Regular  IDApp = { props.IDApp} locale = {locale} />
    </div>
    );
};

export default CorrectingIDInfo;

