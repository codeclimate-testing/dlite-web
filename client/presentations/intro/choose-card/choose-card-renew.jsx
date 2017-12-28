'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';

const Form = (props) => {
  if(props.cardAction === 'new') { return null; }

  return (
    <div className='row inner-bottom chooseRenewCard'>
      <RadioSelector 
        {...props}
        value='ID'
        name='renew'
        text='ID'
        selected={ props.cardType.renew === 'ID' }
      />
      <RadioSelector
        {...props}
        value='DL'
        name='renew'
        text='Driver License'
        selected={ props.cardType.renew === 'DL' }
      />
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
