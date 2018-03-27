'use strict';

import React      from 'react';
import Translator from '../i18n/translator-tag.jsx';
const ExampleLabel = (props) => {
  if(!props.children) { return null; }
  return (
    <div className = 'additional-label example'>
      { props.children }
    </div>
  );
};

export default ExampleLabel;
