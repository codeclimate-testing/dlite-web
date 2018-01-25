'use strict';

import React from 'react';
import translations from '../i18n';

const ContinueButton = (props) => {
  return (
    <div className='shadow-container unit-right' >
      <button className='arrow-button forward' disabled={props.disabled} hidden={props.hidden}>
        {translations.shared.navigation.next}
      </button>
    </div>
  );
};

export default ContinueButton;
