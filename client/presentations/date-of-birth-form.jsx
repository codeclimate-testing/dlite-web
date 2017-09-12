'use strict';

import React from 'react';

import HomeLink         from './home-link.jsx';
import TextInput        from './text-input.jsx';
import NumberInput      from './number-input.jsx';
import ContinueButton   from './continue-button.jsx';
import navigateOnSubmit from '../helpers/navigate-on-submit';

const Form = (props) => {
  let dateOfBirth = props.dateOfBirth;
  let continueDisabled = !(dateOfBirth.month && dateOfBirth.day && dateOfBirth.year);
  let onSubmit = navigateOnSubmit('/about-me/addresses', props);

  return (
    <div className='date-of-birth-form'>
      <HomeLink />

      <h4>What's your date of birth?</h4>
      <h5>Example: 03 21 1967</h5>

      <form onSubmit={ onSubmit }>
        <div className='row inner-bottom'>
          <NumberInput
            onChange={props.onChange}
            identifier='month'
            description='Month'
            value={props.dateOfBirth.month}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='day'
            description='Day'
            value={props.dateOfBirth.day}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='year'
            description='Year'
            value={props.dateOfBirth.year}
          />
        </div>

        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  )
};

export default Form;

