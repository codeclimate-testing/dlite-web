'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const Form = (props) => {
  if(props.cardAction === 'new') { return null; }
  let values = {
    ID: 'ID',
    DL: 'Driver License'
  };

  return (
    <div className='row inner-bottom chooseRenewCard'>
      <RadioCollection  
        {...props}
        name='renew'
        selectedValue={props.cardType.renew}
        text={values}
      >
        <RadioSelector 
          value='ID'
        />
        <RadioSelector
          value='DL'
        />
      </RadioCollection>
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
