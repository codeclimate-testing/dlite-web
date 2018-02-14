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
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.applyingLicense);
};

const Renew = (props) => {
  if (!renewDL(props)) { return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.renewingLicense);
};

const Replace = (props) => {
  if (!replaceDL(props)) { return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.replacingLicense);
};

const Update = (props) => {
  if (!updateDL(props)) {return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingLicense);
};

const Correct = (props) => {
  if (!correctDL(props)) { return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.correctingLicense);
};


const DLInfo = (props) => {
  if(!getDL(props)) { return null; }
  return (
    <div className='dl-info'>
      <New      DLApp = {props.DLApp} />
      <Renew    DLApp = {props.DLApp} />
      <Replace  DLApp = {props.DLApp} />
      <Update   DLApp = {props.DLApp} />
      <Correct  DLApp = {props.DLApp} />
    </div>
  );
};

export default DLInfo;

