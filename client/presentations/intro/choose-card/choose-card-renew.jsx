'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  if(props.cardAction === 'new') { return null; }

  return (
    <div className='row inner-bottom chooseRenewCard'>
      <RadioCollection  
        {...props}
        name='renew'
        selectedValue={props.cardType.renew}
      >
        <RadioSelector 
          value='ID'
          text='ID'
        />
        <RadioSelector
          value='DL'
          text='Driver License'
        />
      </RadioCollection>
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
