'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const text = {
  lostOrStolen: 'It was lost or stolen.',
  damaged:      'It was damaged.',
  other:        'Other'
};

const Form = (props) => {
  
  return (
    <div className='row inner-buttom'>
      <RadioCollection
        {...props}
        name='reason'
        text={text}
        onBlur  = { props.onBlurValidate }
        errorMessage = {props.validations.reason() }
      >
        <RadioSelector
          value='lostOrStolen'
        />
        <RadioSelector
          value='damaged'
        />
        <RadioSelector
          value='other'
        />
      </RadioCollection>
    </div>
  )
};

export default Form;
