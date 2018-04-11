'use strict';

import React                  from 'react';
import Translator             from '../../../i18n/translator-tag.jsx';
import PageSummaryLink        from '../../../containers/page-summary-link.jsx';
import { hasValue }           from '../../../helpers/data/validations';
import { getTimeStamp }       from '../../../helpers/data/application';
import {
  checkCardType,
  getLegalNameKey,
  getSummaryKey
 } from '../../../helpers/data/card-type';


export const CardDescription = (props) => {
  let translationPath = '';
  if (props.cardType.length > 1) {
    translationPath = 'beforeIntro.idMeReturnPage.applyingBoth';
  }
  else if (checkCardType(props.cardType[0], 'ID')) {
    translationPath = 'beforeIntro.idMeReturnPage.applyingID';
  }
  else if (checkCardType(props.cardType[0], 'DL')) {
    translationPath = 'beforeIntro.idMeReturnPage.applyingDL';
  }
  else if (checkCardType(props.cardType[0], 'CDL')) {
    translationPath = 'beforeIntro.idMeReturnPage.applyingCDL';
  }
  return (
    <Translator
      tag='p'
      className={props.id}
      translationPath = { translationPath }
    />
  )
};

export const Applications = (props) => {
  return props.apps.map(app => {
    if (!hasValue(app.cardAction)) { return null; }

    let editKey = getSummaryKey(app.cardType[0]);
    let timeStamp = getTimeStamp(app);

    return (
      <fieldset role='group' aria-label='open application' key={app.id} className='openApp summary-section'>
        <div className='summary-open-app'>
          <div className = {app.id}>
            <h4 className={`question ${app.id}`}>
              {app.name}
            </h4>
            <p className='timestamp'>
              {timeStamp}
            </p>
            <CardDescription cardType = {app.cardType} id={app.id}/>
          </div>
          <PageSummaryLink
            appID={app.id}
            editKey={editKey}
            linkType = 'open-edit'
          />
        </div>
      </fieldset>
    )
  });
}
