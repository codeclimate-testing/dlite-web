'use strict';

import React from 'react';

import Page               from '../page.jsx';
import TextInput        from '../text-input.jsx';
import NumberInput      from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

let pageTitle =  'DMV: License application - My basics'

const Form = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='date-of-birth-form'>
        <h4>What's your date of birth?</h4>
        <h5>Example: 03 21 1967</h5>

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
            <NumberInput
              onChange={ props.onChange }
              identifier='month'
              description='Month'
              value={props.dateOfBirth.month}
            />

            <div className='unit spacer' />

            <NumberInput
              onChange={ props.onChange }
              identifier='day'
              description='Day'
              value={props.dateOfBirth.day}
            />

            <div className='unit spacer' />

            <NumberInput
              onChange={ props.onChange }
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
    </Page>
  );
};

export default Form;
