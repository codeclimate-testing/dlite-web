'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';
import ContinueButton   from '../continue-button.jsx';
import navigateOnSubmit from '../../helpers/navigate-on-submit';

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='date-of-birth-form'>
      <HomeLink />
      <h3>1 &raquo; My Basics: Who You Are</h3>
      <hr></hr>

      <h4>What's your date of birth?</h4>
      <h5>Example: 03 21 1967</h5>

      <form onSubmit={ props.onSubmit }>
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

        <ContinueButton disabled={props.continueDisabled} />
      </form>
    </div>
  )
};

export default Form;
