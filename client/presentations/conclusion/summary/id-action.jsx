'use strict';

import React            from 'react';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  IDAppExists,
  getNewID,
  renewID,
  replaceID,
  correctID,
  updateID
} from '../../../helpers/data/card-type';

const New = (props) => {
  if (!getNewID) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.applying}
    />
  )
};

const Renew = (props) => {
  if (!renewID) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.renewing}
    />
  )
};

const Replace = (props) => {
  if (!replaceID) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.replacing}
    />
  )
};

const Correct = (props) => {
  if (!correctID) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.correcting}
    />
  )
};

const Update = (props) => {
  if (!updateID) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.updating}
    />
  )
};
const IDAction = (props) => {
  if(!IDAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      to='/what-do-you-want-to-do-today'
      name='wdywtdt'
    >
      <New IDApp = {props.IDApp}/>
      <Renew IDApp = {props.IDApp}/>
      <Replace IDApp = {props.IDApp}/>
      <Correct IDApp = {props.IDApp}/>
      <Update IDApp = {props.IDApp}/>

    </PageSummaryLink>
  )
};

export default IDAction;

