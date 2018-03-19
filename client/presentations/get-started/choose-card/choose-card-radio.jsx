'use strict';

import React                from 'react';

import RadioCollection      from '../../radio-selector-collection.jsx';
import radioIdDlGroup       from '../../radio-id-dl-group.jsx';

const Form = (props) => {
  let locale = props.locale;
  if (!props.showIf) { return null; }

  return (
    <div className='row chooseRadioCard'>
      <fieldset role='group' aria-label='Card choice'>
        <RadioCollection
          {...props}
          name            = { props.cardAction }
          onBlur          = { props.onBlurValidate }
          errorMessage    = { props.validations.cardType()}
        >
        {radioIdDlGroup(locale)}
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
