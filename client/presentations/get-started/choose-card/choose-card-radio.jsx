'use strict';

import React                from 'react';

import RadioCollection      from '../../radio-selector-collection.jsx';
import radioIdDlGroup       from '../../radio-id-dl-group.jsx';

const Form = (props) => {
  if(!props.showIf) { return null; }

  return (
    <div className='row chooseRadioCard'>
      <fieldset>
      <RadioCollection
        {...props}
        name            = 'IDDL'
        onBlur          = { props.onBlurValidate }
        errorMessage    = { props.validations.cardType()}
      >
        { radioIdDlGroup() }
      </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
