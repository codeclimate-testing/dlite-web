'use strict';

import React from 'react';
import RadioSelector from './radio-selector.jsx';

const radioIdDlGroup = () => {
  return [
    <RadioSelector
      key='ID'
      value='ID'
    />,
    <RadioSelector
      key='DL'
      value='DL'
      text='Driver License'
    />
  ];
};

export default radioIdDlGroup;
