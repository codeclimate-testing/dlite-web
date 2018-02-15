'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  DLAppExists,
  renewDL,
  replaceDL,
  correctDL,
  updateDL,
  getNewDL
} from '../../../helpers/data/card-type';
import { ifAddLicense } from '../../../helpers/data/pathnames';

const New = (props) => {
  if (!getNewDL(props)) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.applying}
    />
  )
};

const Renew = (props) => {
  if (!renewDL(props)) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.renewing}
    />
  )
};

const Replace = (props) => {
  if (!replaceDL(props)) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.replacing}
    />
  )
};

const Correct = (props) => {
  if (!correctDL(props)) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.correcting}
    />
  )
};

const Update = (props) => {
  if (!updateDL(props)) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.updating}
    />
  )
};

const DLAction = (props) => {
  if(!DLAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      to='/what-do-you-want-to-do-today'
      name={ifAddLicense(props.addApp, 'wdywtdt', 'addWdywtdt')}
    >
      <New DLApp = {props.DLApp}/>
      <Renew DLApp = {props.DLApp}/>
      <Replace DLApp = {props.DLApp}/>
      <Correct DLApp = {props.DLApp}/>
      <Update DLApp = {props.DLApp}/>
    </PageSummaryLink>
  )
};

export default DLAction;

