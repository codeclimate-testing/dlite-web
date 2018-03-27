'use strict';

import React        from 'react';
import Translator   from '../i18n/translator-tag.jsx';

const ContinueButton = (props) => {
  return (
    <div className='shadow-container unit-right' >
      <button className='arrow-button forward' disabled={props.disabled} hidden={props.hidden}>
        <Translator tag = 'span' translationPath = 'shared.navigation.next' />
      </button>
    </div>
  );
};

export default ContinueButton;
