'use strict';

import React          from 'react';
import translations   from '../../../i18n';
import SummaryItem    from './summary-item.jsx';
import {
  getDL
} from '../../../helpers/data/card-type';


const actionNew = translations.summaryPage.whatImDoing.applying
const actionRenew = translations.summaryPage.whatImDoing.renewing
const actionReplace = translations.summaryPage.whatImDoing.replacing
const actionCorrect = translations.summaryPage.whatImDoing.correcting
const actionUpdate = translations.summaryPage.whatImDoing.updating

const DLAction = (props) => {
  if(!getDL(props)) { return null; }
  let dlAction = ''

  switch(props.cardType.cardAction) {
    case 'new':
      dlAction = actionNew
      break;
    case 'renew':
      dlAction = actionRenew
      break;
    case 'replace':
      dlAction = actionReplace
      break;
    case 'change':
      if(props.cardChanges.correctOrUpdate === 'update') {
        dlAction = actionUpdate
      } else if(props.cardChanges.correctOrUpdate === 'correct') {
        dlAction = actionCorrect
      }
      break;
    default:
      dlAction;
  }

  return (
    <SummaryItem
      title='I am'
      text={dlAction}
    />
  )
};

export default DLAction;

