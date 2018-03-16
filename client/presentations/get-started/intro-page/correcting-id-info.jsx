'use strict';

import React          from 'react';
import translations   from '../../../i18n';

import Translation            from '../../../i18n/translate-tag.jsx';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import { correctID }          from '../../../helpers/data/card-type';


const Senior = (props) => {
  let locale = props.locale;
  if (!gettingSeniorID(props.IDApp)) { return null; }
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.correctingSeniorID}
         </Translation>
};

const Reduced = (props) => {
  let locale = props.locale;
  if (!choosingReducedFee(props.IDApp)) { return null; }
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID}
         </Translation>
};

const Regular = (props) => {
  let locale = props.locale;
  if (gettingSeniorID(props.IDApp) || choosingReducedFee(props.IDApp)) { return null; }
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.correctingID}
         </Translation>
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

