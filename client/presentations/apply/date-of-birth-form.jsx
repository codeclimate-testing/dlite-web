'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import SectionHeader      from '../section-header.jsx';

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='date-of-birth-form'>
      <HomeLink />
      <SectionHeader
        number='1'
        name='My basics'
      />

      <h4>What's your date of birth?</h4>
      <h5>Example: 03 21 1967</h5>

      <form onSubmit={ props.onSubmit } >
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

        <NavigationButtons
          {...props}
        />
      </form>
    </div>
  )
};

export default Form;
