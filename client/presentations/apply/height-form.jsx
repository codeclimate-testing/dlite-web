'use strict';

import React            from 'react';
import HomeLink         from '../home-link.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='height-form'>
      <HomeLink />

      <h4>How tall are you?</h4>
      <h5>Example: 5 feet 9 inches</h5>

      <form onSubmit={ props.onSubmit }>
        <div className='row inner-bottom'>
          <NumberInput
            onChange={ props.onChange }
            identifier='feet'
            description='Feet'
            value={ props.height.feet }
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={ props.onChange }
            identifier='inches'
            description='Inches'
            value={ props.height.inches }
          />
        </div>

        <ContinueButton disabled={ props.continueDisabled } />
      </form>
    </div>
  );
};

export default Form;

