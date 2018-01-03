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
      >
        <RadioSelector
          value='correct'
          text={text.correct}
        />
        <RadioSelector
          value='update'
          text={text.update}
        />
      </RadioCollection>
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
