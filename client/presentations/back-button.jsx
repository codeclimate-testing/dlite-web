'use strict';

import React      from 'react';
import Translator from '../i18n/translator-tag.jsx';

const BackButton = (props) => {
  return (
    <div className='shadow-container unit'>
      <button
        className = 'arrow-button backwards'
        onClick   = { props.onBack }
        type      = 'button'
      >
        <Translator tag = 'span' translationPath = 'shared.navigation.back' />
      </button>
    </div>
  );
};

export default BackButton;
