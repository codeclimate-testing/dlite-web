'use strict';

import React                  from 'react';
import Translator             from '../../../i18n/translator-tag.jsx';

const ExplanationString = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'cdl.caDlPage.yesSection.prompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'cdl.caDlPage.yesSection.explanation'
      />
    </div>
  )
};

export default ExplanationString;
