'use strict';

import React          from 'react';
import RadioSelector  from './radio-selector.jsx';
import {
  RadioSelectorYesTranslation,
  RadioSelectorNoTranslation
} from './shared/translations-radio-selector.jsx';

const radioYesNoGroup = (locale) => {
  return [
    <RadioSelector
      key       = 'Yes'
      value     = 'Yes'
      text      = { <RadioSelectorYesTranslation /> }
    />,
    <RadioSelector
      key       = 'No'
      value     = 'No'
      text      = { <RadioSelectorNoTranslation /> }
    />
  ];
};

export default radioYesNoGroup;
