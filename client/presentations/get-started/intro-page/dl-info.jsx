'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import {
  getNewDL,
  replaceDL,
  renewDL,
  updateDL,
  correctDL
} from '../../../helpers/data/card-type';

const New = (props) => {
  if (!getNewDL(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.applyingLicense);
};

const Renew = (props) => {
  if (!renewDL(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.renewingLicense);
};

const Replace = (props) => {
  if (!replaceDL(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.replacingLicense);
};

const Update = (props) => {
  if (!updateDL(props)) {return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.updatingLicense);
};

const Correct = (props) => {
  if (!correctDL(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.correctingLicense);
};


const DLInfo = (props) => {
  if(!getDL(props)) { return null; }
  return (
    <div className='dl-info'>
      <New      DLApp = {props.DLApp} locale = {props.locale} />
      <Renew    DLApp = {props.DLApp} locale = {props.locale} />
      <Replace  DLApp = {props.DLApp} locale = {props.locale} />
      <Update   DLApp = {props.DLApp} locale = {props.locale} />
      <Correct  DLApp = {props.DLApp} locale = {props.locale} />
    </div>
  );
};

export default DLInfo;

