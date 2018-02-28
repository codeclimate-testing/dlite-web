'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import { updateID }      from '../../../helpers/data/card-type';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import { convertToHtml } from '../../../i18n/convert-to-html.jsx';

const Senior = (props) => {
  if (!gettingSeniorID(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.updatingSeniorID);
};

const Reduced = (props) => {
  if (!choosingReducedFee(props.IDApp)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID);
};

const Regular = (props) => {
  if (gettingSeniorID(props) || choosingReducedFee(props.IDApp)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.whatYouAreDoing.updatingID);
};

const UpdatingIDInfo = (props) => {
  if (!updateID(props)) { return null; }
  let locale = props.locale;
  return (
    <div className='updating-id-info'>
      <Senior   IDApp = {props.IDApp } locale={locale}/>
      <Reduced  IDApp = {props.IDApp } locale={locale}/>
      <Regular  IDApp = { props.IDApp} locale={locale}/>
    </div>
    );
};

export default UpdatingIDInfo;

