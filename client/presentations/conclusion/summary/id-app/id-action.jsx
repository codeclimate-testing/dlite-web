'use strict';

import React                from 'react';
import PageSummaryLink      from '../../../../containers/page-summary-link.jsx';
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
  return (
    <PageSummaryLink
      {...props}
    >
      <New        showIf = {getNewID(props)}  />
      <Renew      showIf = {renewID(props)}   />
      <Replace    showIf = {replaceID(props)} />
      <Correct    showIf = {correctID(props)} />
      <Update     showIf = {updateID(props)}  />

    </PageSummaryLink>
  )
};

export default IDAction;

