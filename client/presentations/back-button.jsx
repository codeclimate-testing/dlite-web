'use strict';

import React      from 'react';
import Translator from '../i18n/translator-tag.jsx';

const BackButton = (props) => {
  return (
    <div className='unit'>
      <div className='shadow-container'>
        <button
          className='arrow-button backwards'
          onClick={props.onBack}
          type='button'
        >
          <Translator tag = 'span' translationPath = 'shared.navigation.back' />
        </button>
      </div>
    </div>
  );
};

export default BackButton;
