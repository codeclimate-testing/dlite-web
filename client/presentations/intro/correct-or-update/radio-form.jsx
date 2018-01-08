'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  let text = {
    correct:  'Correct',
    update:   'Update'
  };

  return (
    <div className='row inner-buttom'>
      <RadioCollection
        {...props}
        name='correctOrUpdate'
        text={text}
      >
        <RadioSelector
          value='correct'
        />
        <RadioSelector
          value='update'
        />
      </RadioCollection>
    </div>
  )
};

export default Form;
