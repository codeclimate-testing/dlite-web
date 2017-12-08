'use strict';

import React from 'react';

import CheckBoxInput            from '../checkbox-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {
  return (
    <div className='choose-card-form'>
      <h4>What type of card would you like?</h4>

      <form onSubmit={ props.onSubmit } >
        <div className='row inner-bottom'>
          <CheckBoxInput
            identifier='ID'
            description='ID'
            onChange={ props.onChange }
            checked={ props.cardType.ID }
          />

          <CheckBoxInput
            identifier='DL'
            description='Driver License'
            onChange={ props.onChange }
            checked={ props.cardType.DL }
          />

          <div className='unit spacer' />
        </div>

        <NavigationButtons
          {...props}
        />
      </form>
    </div>
  )
};

export default Form;
