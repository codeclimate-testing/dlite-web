'use strict';

import React          from 'react';
import RadioSelector  from './radio-selector.jsx';
import translations   from '../i18n';

const radioYesNoGroup = (locale) => {
  return [
    <RadioSelector
      key='Yes'
      value='Yes'
      text={translations[locale].shared.commonAnswers.yes}
    />,
    <RadioSelector
      key='No'
      value='No'
      text={translations[locale].shared.commonAnswers.no}
    />
  ];
};

export default radioYesNoGroup;
