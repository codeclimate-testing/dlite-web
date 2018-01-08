'use strict';

import React from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  if(props.cardAction !== 'new') { return null; }

  let text = {
    ID: 'ID',
    DL: 'Driver License'
  };

  return (
    <div className='row inner-bottom choose-new-cards'>
      <p>Select all that apply.</p>
      <div className='row inner-bottom'>
        <CheckboxCollection
          {...props}
          name          = 'new'
          array         = {props.cardType}
          text          = {text}
          onBlur        = { props.onBlurValidate }
          onFocus       = { props.focus }
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
