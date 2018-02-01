'use strict';

import React from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='row choose-new-cards'>
      <p>Select all that apply.</p>
      <div className='row'>
        <CheckboxCollection
          {...props}
          name          = 'IDDL'
          array         = { props.cardType.IDDL }
          onBlur        = { props.onBlurValidate }
          errorMessage  = { props.validations.cardType()}
        >
          <CheckboxSelector
            value     = 'ID'
            text      = 'ID'
          />
          <CheckboxSelector
            value     = 'DL'
            text      = 'Driver License'
          />
        </CheckboxCollection>
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;
