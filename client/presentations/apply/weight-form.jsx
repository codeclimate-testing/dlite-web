'use strict';

import React            from 'react';

import HomeLink         from '../home-link.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='weight-form'>
      <HomeLink />

      <h4>And how much do you weigh?</h4>
      <h5>Example: 190 pounds</h5>

      <form onSubmit={ props.onSubmit }>
        <div className='row inner-bottom'>
          <NumberInput
            onChange={ props.onChange }
            identifier='weight'
            description='Pounds'
            value={ props.weight }
          />
        </div>

        <ContinueButton disabled={ props.continueDisabled } />
      </form>
    </div>
  );
};

export default Form;

