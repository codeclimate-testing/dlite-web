'use strict';

import React                from 'react';
import PageSummaryLink      from '../../../../containers/page-summary-link.jsx';
import {
  DLAppExists,
  renewDL,
  replaceDL,
  correctDL,
  updateDL,
  getNewDL
} from '../../../../helpers/data/card-type';
import {
  New,
  Renew,
  Replace,
  Correct,
  Update
} from '../actions.jsx';

const DLAction = (props) => {
  if(!DLAppExists(props)) { return null; }
  let locale = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
      <New        showIf = {getNewDL(props)}  locale = {locale}/>
      <Renew      showIf = {renewDL(props)}   locale = {locale}/>
      <Replace    showIf = {replaceDL(props)} locale = {locale}/>
      <Correct    showIf = {correctDL(props)} locale = {locale}/>
      <Update     showIf = {updateDL(props)}  locale = {locale}/>
    </PageSummaryLink>
  )
};

export default DLAction;

