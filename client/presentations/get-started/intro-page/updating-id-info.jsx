'use strict';

import React             from 'react';
import { updateID }      from '../../../helpers/data/card-type';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const Senior = (props) => {
  if (!gettingSeniorID(props.IDApp)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.updatingSeniorID}
         </Translation>
};

const Reduced = (props) => {
  if (!choosingReducedFee(props.IDApp)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID}
         </Translation>
};

const Regular = (props) => {
  if (gettingSeniorID(props.IDApp) || choosingReducedFee(props.IDApp)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.whatYouAreDoing.updatingID}
         </Translation>
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

