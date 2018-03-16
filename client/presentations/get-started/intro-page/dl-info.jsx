'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import Translation  from '../../../i18n/translate-tag.jsx';
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
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.applyingLicense}
         </Translation>
};

const Renew = (props) => {
  if (!renewDL(props)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.renewingLicense}
         </Translation>
};

const Replace = (props) => {
  if (!replaceDL(props)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.replacingLicense}
         </Translation>
};

const Update = (props) => {
  if (!updateDL(props)) {return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.updatingLicense}
         </Translation>
};

const Correct = (props) => {
  if (!correctDL(props)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.correctingLicense}
         </Translation>
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

