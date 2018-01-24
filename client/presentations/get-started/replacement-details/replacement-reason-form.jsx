'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  return (
    <div className='row inner-buttom'>
      <RadioCollection
        {...props}
        name='reason'
        onBlur  = { props.onBlurValidate }
        errorMessage = {props.validations.reason() }
      >
        <RadioSelector
          value='lostOrStolen'
          text='It was lost or stolen.'
        />
        <RadioSelector
          value='damaged'
          text='It was damaged.'
        />
        <RadioSelector
          value='other'
          text='Other'
        />
      </RadioCollection>
    </div>
  )
};

export default Form;
