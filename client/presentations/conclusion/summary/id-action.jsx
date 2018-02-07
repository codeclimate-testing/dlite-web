'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  getID
} from '../../../helpers/data/card-type';
import {
  getStringByAction
} from '../../../helpers/data/card-actions';


const actionNew = translations.summaryPage.whatImDoing.applying
const actionRenew = translations.summaryPage.whatImDoing.renewing
const actionReplace = translations.summaryPage.whatImDoing.replacing
const actionCorrect = translations.summaryPage.whatImDoing.correcting
const actionUpdate = translations.summaryPage.whatImDoing.updating

const IDAction = (props) => {
  if(!getID(props)) { return null; }
  let idAction = getStringByAction(props, actionNew, actionRenew, actionReplace, null, actionUpdate, actionCorrect);


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

