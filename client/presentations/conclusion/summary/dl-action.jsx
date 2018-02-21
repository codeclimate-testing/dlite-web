'use strict';

import React            from 'react';
import PageSummaryLink  from '../../page-summary-link.jsx';
import {
  DLAppExists,
  renewDL,
  replaceDL,
  correctDL,
  updateDL,
  getNewDL
} from '../../../helpers/data/card-type';
import {
  New,
  Renew,
  Replace,
  Correct,
  Update
} from './actions.jsx';

const DLAction = (props) => {
  if(!DLAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      name= 'addWdywtdt'
    >
      <New        showIf = {getNewDL(props)}/>
      <Renew      showIf = {renewDL(props)}/>
      <Replace    showIf = {replaceDL(props)}/>
      <Correct    showIf = {correctDL(props)}/>
      <Update     showIf = {updateDL(props)}/>
    </PageSummaryLink>
  )
};

export default DLAction;

