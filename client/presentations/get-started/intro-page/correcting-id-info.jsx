'use strict';

import React          from 'react';

import Translator             from '../../../i18n/translator-tag.jsx';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import { correctID }          from '../../../helpers/data/card-type';


const Senior = (props) => {
  if (!gettingSeniorID(props.IDApp)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.correctingSeniorID' />
};

const Reduced = (props) => {
  if (!choosingReducedFee(props.IDApp)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID' />
};

const Regular = (props) => {
  if (gettingSeniorID(props.IDApp) || choosingReducedFee(props.IDApp)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.whatYouAreDoing.correctingID' />
};


const CorrectingIDInfo = (props) => {
  if(!correctID(props)) { return null; }
  return (
    <div className='correcting-id-info'>
      <Senior   IDApp = {props.IDApp }/>
      <Reduced  IDApp = {props.IDApp }/>
      <Regular  IDApp = { props.IDApp}/>
    </div>
    );
};

export default CorrectingIDInfo;

