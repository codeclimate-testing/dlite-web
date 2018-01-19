'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const text = {
  correct:  'Correct',
  update:   'Update'
};

const Form = (props) => {
  return (
    <div className    = 'row inner-buttom'>
      <RadioCollection
        {...props}
        name          = 'correctOrUpdate'
        text          = { text }
        errorMessage  = { props.validations.correctOrUpdate() }
      >
        <RadioSelector
          value       = 'correct'
        />
        <RadioSelector
          value       = 'update'
        />
      </RadioCollection>
    </div>
  )
};

export default Form;
