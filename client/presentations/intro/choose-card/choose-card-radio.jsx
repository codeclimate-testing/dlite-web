'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

let text = {
  ID: 'ID',
  DL: 'Driver License'
};

const Form = (props) => {
  if(props.cardAction === 'new') { return null; }
  let values = {
    ID: 'ID',
    DL: 'Driver License'
  };

  let selectedValue = props.cardType[props.cardAction];

  return (
    <div className='row inner-bottom chooseRadioCard'>

      <RadioCollection
        {...props}
        name            = {props.cardAction}
        selectedValue   = {selectedValue}
        text            = {text}
        onBlur          = { props.onBlurValidate }
        onFocus         = { props.focus }
        errorMessage    = { props.validations.cardType()}
      >
        <RadioSelector
          value='ID'
        />
        <RadioSelector
          value='DL'
        />
      </RadioCollection>
    </div>
  )
};

export default Form;
