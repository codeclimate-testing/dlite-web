'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  return (
    <div className='row inner-buttom'>
      <fieldset>
        <RadioCollection
          {...props}
          name          = 'correctOrUpdate'
          errorMessage  = { props.validations.correctOrUpdate() }
        >
          <RadioSelector
            value='correct'
            text='Correct'
          />
          <RadioSelector
            value='update'
            text='Update'
          />
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
