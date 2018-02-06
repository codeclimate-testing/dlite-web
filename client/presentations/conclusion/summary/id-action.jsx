'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getID
} from '../../../helpers/data/card-type';


const actionNew = translations.summaryPage.whatImDoing.applying
const actionRenew = translations.summaryPage.whatImDoing.renewing
const actionReplace = translations.summaryPage.whatImDoing.replacing
const actionCorrect = translations.summaryPage.whatImDoing.correcting
const actionUpdate = translations.summaryPage.whatImDoing.updating

const IDAction = (props) => {
  if(!getID(props)) { return null; }
  let idAction = ''

  switch(props.cardType.cardAction) {
    case 'new':
      idAction = actionNew
      break;
    case 'renew':
      idAction = actionRenew
      break;
    case 'replace':
      idAction = actionReplace
      break;
    case 'change':
      if(props.cardChanges.correctOrUpdate === 'update') {
        idAction = actionUpdate
      } else if(props.cardChanges.correctOrUpdate === 'correct') {
        idAction = actionCorrect
      }
      break;
    default:
      idAction;
  }

  return (
    <PageSummaryLink
      to='/what-do-you-want-to-do-today'
      name='wdywtdt'
    >
      <SummaryItem
        title='I am'
        text={idAction}
      />
    </PageSummaryLink>
  )
};

export default IDAction;

