'use strict';

import React        from 'react';
import Translator   from '../i18n/translator-tag.jsx';

const ContinueButton = (props) => {
  return (
    <div className='unit-right' >
      <div className='shadow-container'>
        <button className='arrow-button forward' disabled={props.disabled} hidden={props.hidden}>
          <Translator tag = 'span' translationPath = 'shared.navigation.next' />
        </button>
      </div>
    </div>
  );
};

export default ContinueButton;
