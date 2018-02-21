'use strict';

import React          from 'react';
import SummaryItem      from './summary-item.jsx';
import translations     from '../../../i18n';

export const New = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.applying}
    />
  )
};

export const Renew = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.renewing}
    />
  )
};

export const Replace = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.replacing}
    />
  )
};

export const Correct = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.correcting}
    />
  )
};

export const Update = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title='I am'
      text={translations.summaryPage.whatImDoing.updating}
    />
  )
};