'use strict';

import React            from 'react';
import HomeLink         from '../home-link.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='traits-height-weight-form'>
      <HomeLink />

      <h4>How tall are you?</h4>
      <h5>Example: 5 feet 9 inches</h5>

      <form onSubmit={ props.onSubmit }>
        <div className='row inner-bottom'>
          <NumberInput
            onChange={ props.onChange }
            identifier='feet'
            description='Feet'
            value={ props.traitsHeightWeight.feet }
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={ props.onChange }
            identifier='inches'
            description='Inches'
            value={ props.traitsHeightWeight.inches }
          />
        </div>

      <h4>And how much do you weigh?</h4>
      <h5>Example: 190 pounds</h5>

        <div className='row inner-bottom'>
          <NumberInput
            onChange={ props.onChange }
            identifier='weight'
            description='Pounds'
            value={ props.traitsHeightWeight.weight }
          />
        </div>

        <ContinueButton disabled={ props.continueDisabled } />
      </form>
    </div>
  );
};

export default Form;

