'use strict';

import React from 'react';
import translations from '../i18n';

const BackButton = (props) => {
  let locale = props.locale;
  return (
    <div className='shadow-container unit'>
      <button
        className='arrow-button backwards'
        onClick={props.onBack}
        type='button'
      >
        {translations[locale].shared.navigation.back}
      </button>
    </div>
  );
};

export default BackButton;
