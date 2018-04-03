'use strict';

import React            from 'react';
import SummaryItem      from './summary-item.jsx';

export const New = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title = 'summaryPage.whatImDoing.starter'
      text  = 'summaryPage.whatImDoing.applying'
    />
  )
};

export const Renew = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title = 'summaryPage.whatImDoing.starter'
      text  = 'summaryPage.whatImDoing.renewing'
    />
  )
};

export const Replace = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title = 'summaryPage.whatImDoing.starter'
      text  = 'summaryPage.whatImDoing.replacing'
    />
  )
};

export const Correct = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title = 'summaryPage.whatImDoing.starter'
      text  = 'summaryPage.whatImDoing.correcting'
    />
  )
};

export const Update = (props) => {
  if (!props.showIf) { return null; }
  return(
    <SummaryItem
      title = 'summaryPage.whatImDoing.starter'
      text  = 'summaryPage.whatImDoing.updating'
    />
  )
};
