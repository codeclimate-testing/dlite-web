'use strict';

import React            from 'react';
import PageSummaryLink  from '../Page-summary-link.jsx';
import {
  IDAppExists,
  getNewID,
  renewID,
  replaceID,
  correctID,
  updateID
}  from '../../../../helpers/data/card-type';
import {
  New,
  Renew,
  Replace,
  Correct,
  Update
} from '../actions.jsx';

const IDAction = (props) => {
  if(!IDAppExists(props)) { return null; }
  let locale = props.locale;
  return (
    <PageSummaryLink
      name    = 'addIDWdywtdt'
      summary = {props.summary}
    >
      <New        showIf = {getNewID(props)}    locale = {locale}/>
      <Renew      showIf = {renewID(props)}     locale = {locale}/>
      <Replace    showIf = {replaceID(props)}   locale = {locale}/>
      <Correct    showIf = {correctID(props)}   locale = {locale}/>
      <Update     showIf = {updateID(props)}    locale = {locale}/>

    </PageSummaryLink>
  )
};

export default IDAction;

