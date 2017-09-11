'use strict';

import React from 'react';

import HomeLink  from './home-link.jsx';
import TextInput from './text-input.jsx';
import alicePath from '../helpers/alice-path';

const Form = (props) => {
  let dateOfBirth = props.dateOfBirth;
  let continueDisabled = !(dateOfBirth.month && dateOfBirth.month && dateOfBirth.year);

  let onSubmit = (event) => {
    props.onSubmit(event);
    props.history.push(
      alicePath('/about-me/addresses')
    );
  };

  return (
    <div className='date-of-birth-form'>
      <HomeLink />

      <h4>What's your date of birth?</h4>
      <h5>Example: 03 21 1967</h5>

      <form onSubmit={ onSubmit }>
        <div className='row inner-bottom'>
          <div className='unit'>
            <label htmlFor='month'>Month</label>
            <div className='input-container month-input'>
              <input
                className='unit size-1-1'
                type='number'
                id='month'
                name='month'
                onChange={ props.onChange }
                value={ props.dateOfBirth.month }
              />
            </div>
          </div>

          <div className='unit spacer' />

          <div className='unit'>
            <label htmlFor='day'>Day</label>
            <div className='input-container day-input'>
              <input
                type='number'
                className='unit size-1-1'
                id='day'
                name='day'
                onChange={ props.onChange }
                value={ props.dateOfBirth.day }
              />
            </div>
          </div>

          <div className='unit spacer' />

          <div className='unit'>
            <label htmlFor='year'>Year</label>
            <div className='input-container year-input'>
              <input
                type='number'
                className='unit size-1-1'
                id='year'
                name='year'
                onChange={ props.onChange }
                value={ props.dateOfBirth.year }
              />
            </div>
          </div>
        </div>

        <div className='shadow-container'>
          <input
            type="submit"
            value="Continue"
            disabled={continueDisabled}
          />
        </div>
      </form>
    </div>
  )
};

export default Form;

