'use strict';

import React          from 'react';
import SummaryItem      from './summary-item.jsx';
import translations     from '../../../i18n';

export const New = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return(
    <SummaryItem
      title='I am'
      text={translations[locale].summaryPage.whatImDoing.applying}
    />
  )
};

export const Renew = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return(
    <SummaryItem
      title='I am'
      text={translations[locale].summaryPage.whatImDoing.renewing}
    />
  )
};

export const Replace = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return(
    <SummaryItem
      title='I am'
      text={translations[locale].summaryPage.whatImDoing.replacing}
    />
  )
};

export const Correct = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return(
    <SummaryItem
      title='I am'
      text={translations[locale].summaryPage.whatImDoing.correcting}
    />
  )
};

export const Update = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return(
    <SummaryItem
      title='I am'
      text={translations[locale].summaryPage.whatImDoing.updating}
    />
  )
};