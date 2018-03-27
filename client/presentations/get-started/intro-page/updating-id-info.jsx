'use strict';

import React                  from 'react';
import { updateID }           from '../../../helpers/data/card-type';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import Translator             from '../../../i18n/translator-tag.jsx';

const Senior = (props) => {
  if (!gettingSeniorID(props.IDApp)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.updatingSeniorID' />
};

const Reduced = (props) => {
  if (!choosingReducedFee(props.IDApp)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID' />
};

const Regular = (props) => {
  if (gettingSeniorID(props.IDApp) || choosingReducedFee(props.IDApp)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.updatingID' />
};

const UpdatingIDInfo = (props) => {
  if (!updateID(props)) { return null; }
  return (
    <div className='updating-id-info'>
      <Senior   IDApp = {props.IDApp } />
      <Reduced  IDApp = {props.IDApp } />
      <Regular  IDApp = { props.IDApp} />
    </div>
    );
};

export default UpdatingIDInfo;

