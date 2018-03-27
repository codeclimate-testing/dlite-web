'use strict';

import React          from 'react';
import RadioSelector  from './radio-selector.jsx';
import {
  RadioSelectorYesTranslation,
  RadioSelectorNoTranslation
} from './shared/translations-radio-selector.jsx';

const radioYesNoGroup = () => {
  return [
    <RadioSelector key = 'Yes' value = 'Yes'>
      <RadioSelectorYesTranslation />
    </RadioSelector>,
    <RadioSelector key = 'No' value = 'No'>
      <RadioSelectorNoTranslation />
    </RadioSelector>
  ];
};

export default radioYesNoGroup;
