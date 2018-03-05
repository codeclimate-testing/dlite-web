'use strict';
import React              from 'react';
import translations       from '../../../i18n';
import SummaryItem        from './summary-item.jsx';

export const Yes = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title = { props.title }
      text  = { translations[locale].shared.commonAnswers.yes}
    />
  )
};

export const No = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title = { props.title }
      text  = { translations[locale].shared.commonAnswers.no}
    />
  )
};