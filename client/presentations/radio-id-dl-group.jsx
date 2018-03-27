'use strict';

import React          from 'react';
import RadioSelector  from './radio-selector.jsx';
import Translator     from '../i18n/translator-tag.jsx';

const radioIdDlGroup = () => {
  return [
    <RadioSelector key='ID' value='ID'>
      <Translator tag = 'span' translationPath = 'intro.chooseSelectionPage.values.0' />
    </RadioSelector>,
    <RadioSelector key='DL' value='DL'>
      <Translator tag = 'span' translationPath = 'intro.chooseSelectionPage.values.1' />
    </RadioSelector>
  ];
};

export default radioIdDlGroup;
