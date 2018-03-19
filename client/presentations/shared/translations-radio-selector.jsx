'use strict';

import React        from 'react';
import Translator   from '../../i18n/translator-tag.jsx';

export const RadioSelectorYesTranslation = () => {
  return (
    <Translator
      tag               = 'span'
      translationPath   = 'shared.commonAnswers.yes'
    />
  );
};

export const RadioSelectorNoTranslation = () => {
  return (
    <Translator
      tag               = 'span'
      translationPath   = 'shared.commonAnswers.no'
    />
  );
};

export const RadioSelectorDeclineTranslation = () => {
  return (
    <Translator
      tag               = 'span'
      translationPath   = 'shared.commonAnswers.declineToAnswer'
    />
  );
};
