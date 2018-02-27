'use strict';

import React from 'react';
import translations from '../../../i18n';

const SubmitButton = (props) => {
  let submitText = translations.summaryPage.buttons.submit;

  return (
    <div className='navigation-buttons row' key='save-and-continue'>
      <button type='submit' className='arrow-button forward submit'>
        { submitText }
      </button>
    </div>
  );
};

export default SubmitButton;
