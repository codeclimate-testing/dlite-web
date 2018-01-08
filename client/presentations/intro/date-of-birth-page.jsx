'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import NumberInput        from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

import { DOBPageValidator } from '../../helpers/validations';

const Presentation = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={ props.onSubmit } className='date-of-birth-form'>
        <h2 className='question pad-bottom-10'>What's your date of birth?</h2>
        <p className='pad-bottom-20'>Example: 03 21 1967</p>

        <div className='row inner-bottom'>
          <NumberInput
            onChange={ props.onChange }
            identifier='month'
            description='MM'
            onBlur={ props.onBlurValidate}
            onFocus={ props.onFocusClearValidation }
            errorMessage={ props.validations.month() }
            value={props.dateOfBirth.month}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={ props.onChange }
            onBlur={ props.onBlurValidate}
            onFocus={ props.onFocusClearValidation }
            errorMessage={ props.validations.day() }
            identifier='day'
            description='DD'
            value={props.dateOfBirth.day}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={ props.onChange }
            onBlur={ props.onBlurValidate}
            onFocus={ props.onFocusClearValidation }
            errorMessage={ props.validations.year() }
            identifier='year'
            description='YYYY'
            value={props.dateOfBirth.year}
          />
        </div>

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  );
};

export default Presentation;
