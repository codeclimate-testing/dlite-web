'use strict';

import React        from 'react';
import { getDL }    from '../../../helpers/data/card-type';
import Translator   from '../../../i18n/translator-tag.jsx';
import {
  getNewDL,
  replaceDL,
  renewDL,
  updateDL,
  correctDL
} from '../../../helpers/data/card-type';

const New = (props) => {
  if (!getNewDL(props)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.applyingLicense' />
};

const Renew = (props) => {
  if (!renewDL(props)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.renewingLicense' />
};

const Replace = (props) => {
  if (!replaceDL(props)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.replacingLicense' />
};

const Update = (props) => {
  if (!updateDL(props)) {return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.updatingLicense' />
};

const Correct = (props) => {
  if (!correctDL(props)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.correctingLicense' />
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

