'use strict';

import React from 'react';
import RadioSelector from './radio-selector.jsx';
import translations from '../i18n';

const radioIdDlGroup = (locale) => {
  return [
    <RadioSelector
      key='ID'
      value='ID'
      text={translations[locale].intro.chooseSelectionPage.values[0]}
    />,
    <RadioSelector
      key='DL'
      value='DL'
      text={translations[locale].intro.chooseSelectionPage.values[1]}
    />
  ];
};

export default radioIdDlGroup;
