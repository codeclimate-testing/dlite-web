'use strict';

import React from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  if(props.cardType.cardAction !== 'new') { return null; }

  let text = {
    ID: 'ID',
    DL: 'Driver License'
  };

  return (
    <div className='row choose-new-cards'>
      <p>Select all that apply.</p>
      <div className='row'>
        <CheckboxCollection
          {...props}
          name          = 'IDDL'
          array         = { props.cardType.IDDL }
          text          = { text}
          onBlur        = { props.onBlurValidate }
          errorMessage  = { props.validations.cardType()}
        >
          <CheckboxSelector
            value     = 'ID'
          />
          <CheckboxSelector
            value     = 'DL'
          />
        </CheckboxCollection>
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;
