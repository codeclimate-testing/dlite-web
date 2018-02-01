'use strict';

import React        from 'react';

export const QuestionHeader = (props) => {
  if (!props.showIf) { return null; }
  let className = 'question';
  if (props.translationMissing) {
    className += 'translation-missing';
  }
  return (
    <h2 className={className}>{props.text}</h2>
  );
};

export const SubQuestionHeader = (props) => {
  if (!props.showIf) { return null; }
  let className = 'question';
  if (props.translationMissing) {
    className += 'translation-missing';
  }
  return (
    <h3 className={className}>{props.text}</h3>
  );
};