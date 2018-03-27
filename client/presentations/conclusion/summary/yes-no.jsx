'use strict';
import React              from 'react';
import Translator         from '../../../i18n/translator-tag.jsx';
import SummaryItem        from './summary-item.jsx';

export const Yes = (props) => {
  if (!props.showIf) { return null; }
  return (
    <SummaryItem
      title = { props.title }
      text  = {  <Translator tag = 'span' translationPath = 'shared.commonAnswers.yes' /> }
    />
  )
};

export const No = (props) => {
  if (!props.showIf) { return null; }
  return (
    <SummaryItem
      title = { props.title }
      text  = {  <Translator tag = 'span' translationPath = 'shared.commonAnswers.no' /> }
    />
  )
};