'use strict';

import React                  from 'react';
import Translator             from '../../i18n/translator-tag.jsx';
import PageSummaryLink        from '../../containers/page-summary-link.jsx';
import { hasValue }           from '../../helpers/data/validations';
import {
  checkCardType,
  getLegalNameKey
 } from '../../helpers/data/card-type';


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

    let editKey = getLegalNameKey(app.cardType[0]);
    return (
      <fieldset role='group' aria-label='open application' key={app.id} className='openApp summary-section'>
        <h4 className={`question ${app.id}`}>
          {app.name}
        </h4>
        <CardDescription cardType = {app.cardType} id={app.id}/>
        <PageSummaryLink
          appID={app.id}
          flow=''
          editKey={editKey}
          history={props.history}
        />
      </fieldset>
    )
  });
}
