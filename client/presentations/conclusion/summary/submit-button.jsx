'use strict';

import React        from 'react';
import Translator   from '../../../i18n/translator-tag.jsx';

const SubmitButton = (props) => {
  let submitText =  <Translator tag = 'span' translationPath = 'summaryPage.buttons.submit' />;

  return (
    <div className='navigation-buttons row' key='save-and-continue'>
      <button type='submit' className='arrow-button forward submit'>
        { submitText }
      </button>
    </div>
  );
};

export default SubmitButton;
