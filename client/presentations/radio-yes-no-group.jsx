'use strict';

import React from 'react';
import RadioSelector from './radio-selector.jsx';

const radioYesNoGroup = () => {
  return [
    <RadioSelector
      key='Yes'
      value='Yes'
    />,
    <RadioSelector
      key='No'
      value='No'
    />
  ];
};

export default radioYesNoGroup;
