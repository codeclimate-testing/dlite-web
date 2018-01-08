'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  let text = {
    lostOrStolen: 'It was lost or stolen.',
    damaged:      'It was damaged.',
    other:        'Other'
  };
  
  return (
    <div className='row inner-buttom'>
      <RadioCollection
        {...props}
        name='reason'
        text={text}
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
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
