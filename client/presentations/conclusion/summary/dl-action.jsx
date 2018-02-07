'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import { getStringByAction }  from '../../../helpers/data/card-actions';
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
  let dlAction = getStringByAction(props, actionNew, actionRenew, actionReplace, null, actionUpdate, actionCorrect);

  return (
    <PageSummaryLink
      to='/what-do-you-want-to-do-today'
      name='wdywtdt'
    >
      <SummaryItem
        title='I am'
        text={dlAction}
      />
    </PageSummaryLink>
  )
};

export default DLAction;

