'use strict';

import React             from 'react';
import translations      from '../../../i18n';
import { updateID }      from '../../../helpers/data/card-type';
import { gettingSeniorID }    from '../../../helpers/data/senior';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';
import { convertToHtml } from '../../../i18n/convert-to-html.jsx';

const Senior = (props) => {
  if (!gettingSeniorID(props)) { return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID);
};

const Reduced = (props) => {
  if (!choosingReducedFee(props.IDApp)) { return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID);
};

const Regular = (props) => {
  if (gettingSeniorID(props) || choosingReducedFee(props.IDApp)) { return null; }
  return convertToHtml('p', translations.intro.getStartedPage.whatYouAreDoing.updatingID);
};

const UpdatingIDInfo = (props) => {
  if (!updateID(props)) { return null; }

  return (
    <div className='updating-id-info'>
      <Senior IDApp = {props.IDApp } />
      <Reduced IDApp = {props.IDApp } />
      <Regular IDApp = { props.IDApp} />
    </div>
    );
};

export default UpdatingIDInfo;

