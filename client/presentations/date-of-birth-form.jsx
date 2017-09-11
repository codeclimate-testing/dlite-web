'use strict';

import React from 'react';

import HomeLink  from './home-link.jsx';
import TextInput from './text-input.jsx';
import alicePath from '../helpers/alice-path';

const LegalNameForm = (props) => {
  let dateOfBirth = props.dateOfBirth;
  let continueDisabled = dateOfBirth.month && dateOfBirth.month && dateOfBirth.year;

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

      <form onSubmit={onSubmit}>
        <TextInput
          identifier='month'
          description='Month'
          value={props.dateOfBirth.month}
          onChange={props.onChange}
        />

        <TextInput
          identifier='day'
          description='Day'
          value={props.dateOfBirth.day}
          onChange={props.onChange}
        />

        <TextInput
          identifier='year'
          description='Year'
          value={props.dateOfBirth.year}
          onChange={props.onChange}
        />

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

export default LegalNameForm;

